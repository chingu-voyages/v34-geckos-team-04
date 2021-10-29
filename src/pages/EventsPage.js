import EventItem from '../components/EventItem.js';
import EventInfo from '../components/EventInfo.js';
import { useState, useContext } from 'react';
import { EventsContext } from '../contexts/EventsContext.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(false);
  const { eventData: events } = useContext(EventsContext);

  return (
    <div className='flex flex-row justify-around h-full'>
      <Router>
        {!activeEvent && <Redirect to='/events' />}
        <div
          className={`lg:w-1/3 flex justify-center overflow-y-auto ${
            activeEvent && 'hidden lg:flex'
          }`}
        >
          <ul className='flex flex-col space-y-10 items-center w-screen'>
            {events.map((event, index) => (
              <Link key={event.id} to={`/events/${event.id}`}>
                <EventItem event={event} onClick={() => setActiveEvent(true)} />
              </Link>
            ))}
          </ul>
        </div>
        <div
          className={`w-screen lg:w-2/3 flex flex-col bg-gray-50 border-l overflow-y-auto px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-28 ${
            !activeEvent && 'hidden lg:flex'
          }`}
        >
          <Switch>
            <Route path={`/events/:eventId`}>
              {/* setActiveEvent prop is temporary until menu/header merged */}
              <EventInfo setActiveEvent={setActiveEvent} />
            </Route>
            <Route path='*'>
              <p>Select an event to view</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
