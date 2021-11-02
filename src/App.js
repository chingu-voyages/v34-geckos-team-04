import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TimeVote from './components/TimeVote';
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

  return (
    <div>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Route exact path='/'>
            {userData.loggedIn ? <Redirect to='/events' /> : <LoginPage />}
          </Route>
          {/* temporary route, it needs to be moved to the EventPage  */}
          <Route path='/events/vote'>
            <TimeVote />
          </Route>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
