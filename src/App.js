import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import MenuBar from './components/MenuBar';
import Header from './components/Header';
//import profilePic from './assets/profile-pic-dummy.jpg';

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
          <Route path='/events'>
            <Header
              title='Breakfast'
              link={userData.imageUrl}
              returnBtn={true}
            />
            <MenuBar />
          </Route>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
