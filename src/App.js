import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';

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

  const { gapi } = window;
  useEffect(() => {
    if (!userData.loggedIn) {
      gapi.load('client:auth2', () => {
        gapi.auth2
          .init({
            client_id: process.env.REACT_APP_CLIENT_ID,
          })
          .then((googleAuth) => {
            if (googleAuth.isSignedIn.get()) {
              const googleUser = googleAuth.currentUser.get();
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
    <div>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Route exact path='/'>
            {userData.loggedIn ? <Redirect to='/events' /> : <LoginPage />}
          </Route>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
