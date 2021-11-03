import React, { useState, useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import { EventsContext } from './contexts/EventsContext';
import EventsPage from './pages/EventsPage';
import events from './utils/eventData';
import eventsReducer from './utils/eventsReducer';
import PrivateRoute from './components/shared/PrivateRoute';
import MenuBar from './components/MenuBar';
import Header from './components/Header';

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
            <Switch>
              <Route exact path='/'>
                {userData.loggedIn ? <Redirect to='/events' /> : <LoginPage />}
              </Route>
              <React.Fragment>
                <PrivateRoute path='/events'>
                  <EventsPage />
                </PrivateRoute>
              </React.Fragment>
            </Switch>
          </EventsContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
