import { useContext } from 'react';
import { EventsContext } from '../contexts/EventsContext';
import DateTimePicker from './DateTimePicker';

const SetDate = () => {
  const { eventId } = useParams();
  const { eventData } = useContext(EventsContext);
  const event = eventData.find((e) => e.id === eventId);

  return (
    <div>
      <h3>Set Date</h3>
      <div>
        <p>Starts</p>
        <DateTimePicker minDateTime={new Date()} setting='start' />
      </div>
      <div>
        <p>Ends</p>
        <DateTimePicker minDateTime={event.start} setting='end' />
      </div>
    </div>
  );
};

export default SetDate;
