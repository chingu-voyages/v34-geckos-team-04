import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { UserContext } from './contexts/UserContext';
import { EventsContext } from './contexts/EventsContext';
import EventsPage from './pages/EventsPage';
import events from './utils/eventData';

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

  const [eventData, setEventData] = useState(events);

  return (
    <div className='h-screen'>
      <Router>
        <UserContext.Provider value={{ userData, setUserData }}>
          <EventsContext.Provider value={{ eventData, setEventData }}>
            <Route exact path='/'>
              {userData.loggedIn ? <Redirect to='/events' /> : <LoginPage />}
            </Route>
            <Route path='/events'>
              <EventsPage />
            </Route>
          </EventsContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  );
};

export default App;
