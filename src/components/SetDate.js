import { useState } from 'react';
import { useSelector } from 'react-redux';
import DateTimePicker from './DateTimePicker';

const SetDate = () => {
  //   const [startDateAndTime, setStartDateAndTime] = useState(new Date());
  //   const [endDateAndTime, setEndDateAndTime] = useState(new Date());

  const { events } = useSelector((state) => state.events);
  console.log(events);
  const selectedEvent = events.find((event) => event.id === 1);
  console.log(selectedEvent);

  return (
    <div>
      <h3>Set Date</h3>
      <div>
        <p>Starts</p>
        <DateTimePicker minDateTime={new Date()} />
      </div>
      <div>
        <p>Ends</p>
        <DateTimePicker minDateTime={selectedEvent.start} />
      </div>
    </div>
  );
};

export default SetDate;
