import { useContext } from 'react';
import { useParams } from 'react-router';
import { EventsContext } from '../../contexts/EventsContext';
import DateTimePicker from './DateTimePicker';

const SetDate = () => {
  //select event from the eventData with an ID that matches params
  const { eventId } = useParams();
  const { eventData } = useContext(EventsContext);
  const event = eventData.find((e) => e.id === eventId);

  return (
    <div>
      <h3>Set Date</h3>
      <div>
        <p>Starts</p>
        <DateTimePicker
          minDateTime={new Date()}
          setting='start'
          eventId={eventId}
        />
      </div>
      <div>
        <p>Ends</p>
        <DateTimePicker
          minDateTime={event.start ? event.start : new Date()}
          setting='end'
          eventId={eventId}
        />
      </div>
    </div>
  );
};

export default SetDate;

// COPY AND PASTE BELOW TO REDUCER
// case: 'setNewDate':
// const event = state.find((e) =>e.id === action.eventId);
// const {newDate} = action;
// return state.map((e) => action.eventId === e.id ? { ...e, [action.setting]: newDate } : e  );
