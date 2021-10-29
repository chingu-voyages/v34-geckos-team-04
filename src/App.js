import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
//import DateTimePicker from './components/DateTimePicker';
import SetDate from './components/SetDate';
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
          {/* <Route exact path='/'>
            {userData.loggedIn ? <Redirect to='/events' /> : <LoginPage />}
          </Route> */}
        </UserContext.Provider>
      </Router>
      <SetDate />
    </div>
  );
};

export default App;
