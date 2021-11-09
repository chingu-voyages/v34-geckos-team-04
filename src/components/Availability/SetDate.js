import DateTimePicker from './DateTimePicker';

const SetDate = ({ event, eventId, start }) => {
  return (
    <div>
      <h3>Set Date</h3>
      <div>
        <p>Starts</p>
        <DateTimePicker
          minDateTime={new Date()}
          setting='start'
          eventId={eventId}
          eventDate={event.start}
        />
      </div>
      <div>
        <p>Ends</p>
        <DateTimePicker
          minDateTime={start}
          setting='end'
          eventId={eventId}
          eventDate={event.end}
        />
      </div>
    </div>
  );
};

export default SetDate;
