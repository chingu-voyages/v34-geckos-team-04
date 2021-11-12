import React, {
  useState,
  useReducer,
  useEffect,
  useCallback,
  useLayoutEffect,
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import { EventsContext } from './contexts/EventsContext';
import { UIContext } from './contexts/UIContext';
import EventsPage from './pages/EventsPage';
import events from './utils/eventData';
import eventsReducer from './utils/eventsReducer';
import PrivateRoute from './components/shared/PrivateRoute';

const App = () => {
  // Passed to UserContext.Provider to set and share user data
  // with different components
  const [userData, setUserData] = useState({
    loggedIn: false,
    name: null,
    email: null,
    imageUrl: null,
  });
  console.log('userData', userData);

  const [eventData, dispatch] = useReducer(eventsReducer, events);
  console.log('eventData', eventData);

  const [largeScreen, setLargeScreen] = useState(true);

  const setNewWidth = useCallback(() => {
    if (window.innerWidth >= 1023) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  }, []);

  //initial rendering
  useEffect(() => {
    setNewWidth();
  }, [setNewWidth]);

  //detecting size change
  useLayoutEffect(() => {
    window.addEventListener('resize', setNewWidth);
    return () => window.removeEventListener('resize', setNewWidth);
  }, [setNewWidth]);

  const { gapi } = window;
  useEffect(() => {
    if (!userData.loggedIn) {
      // loads auth2 client for Google JS Library
      gapi.load('client:auth2', () => {
        // gapi.auth2.init() initializes and returns GoogleAuth object
        gapi.auth2
          .init({
            client_id: process.env.REACT_APP_CLIENT_ID,
          })
          .then((googleAuth) => {
            // GoogleAuth.isSignedIn.get() returns a true if the user is signed in, or false if the user is signed out or the GoogleAuth object isn't initialized.
            // sets user data if user signed in
            if (googleAuth.isSignedIn.get()) {
              const googleUser = googleAuth.currentUser.get(); // Returns a GoogleUser object
              const basicProfile = googleUser.getBasicProfile();
              setUserData({
                loggedIn: true,
                name: basicProfile.getName(),
                email: basicProfile.getEmail(),
                imageUrl: basicProfile.getImageUrl(),
              });
            }
          })
          .catch((err) => console.error('error:', err));
      });
    }
  }, [gapi, userData]);

  return (
    <div className='h-screen'>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <EventsContext.Provider value={{ eventData, dispatch }}>
            <UIContext.Provider value={{ largeScreen, setLargeScreen }}>
              <Switch>
                <Route exact path='/'>
                  {userData.loggedIn ? (
                    <Redirect to='/events' />
                  ) : (
                    <LoginPage />
                  )}
                </Route>
                <React.Fragment>
                  <PrivateRoute path='/events'>
                    <EventsPage />
                  </PrivateRoute>
                </React.Fragment>
              </Switch>
            </UIContext.Provider>
          </EventsContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
