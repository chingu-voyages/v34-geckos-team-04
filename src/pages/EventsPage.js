import events from '../utils/eventData.js';
import EventItem from '../components/EventItem.js';

export default function EventsPage() {
  return (
    <div>
      <h1>EventsPage</h1>
      <ul>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}
