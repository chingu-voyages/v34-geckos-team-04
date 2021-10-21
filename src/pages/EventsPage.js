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
    <div className='flex flex-row justify-around'>
      <Router>
        {!activeEvent && <Redirect to='/events' />}
        <div
          className={`event-item-container ${activeEvent && 'hidden lg:block'}`}
        >
          <ul>
            {events.map((event) => (
              <Link key={event.id} to={`/events/${event.id}`}>
                <EventItem event={event} onClick={() => setActiveEvent(true)} />
              </Link>
            ))}
          </ul>
        </div>
        <div
          className={`event-info-container ${
            !activeEvent && 'hidden lg:block'
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
