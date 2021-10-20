import events from '../utils/eventData.js';
import EventItem from '../components/EventItem.js';
import EventInfo from '../components/EventInfo.js';
import { useState } from 'react';

export default function EventsPage() {
  const [activeEvent, setActiveEvent] = useState(null);

  return (
    <div>
      <h1>EventsPage</h1>
      <ul>
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            onClick={() => setActiveEvent(event.id)}
          />
        ))}
      </ul>
      {activeEvent && (
        <EventInfo event={events.find((event) => event.id === activeEvent)} />
      )}
    </div>
  );
}
