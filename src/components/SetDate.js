import { useState } from 'react';
import useSelector from 'react-redux';
import DateTimePicker from './DateTimePicker';

const SetDate = () => {
  //   const [startDateAndTime, setStartDateAndTime] = useState(new Date());
  //   const [endDateAndTime, setEndDateAndTime] = useState(new Date());

  const { start, end } = useSelector((state) => state.events.events);

  return (
    <div>
      <h3>Set Date</h3>
      <div>
        <p>Starts</p>
        <DateTimePicker minDateTime={new Date()} />
      </div>
      <div>
        <p>Ends</p>
        <DateTimePicker minDateTime={new Date()} />
      </div>
    </div>
  );
};

export default SetDate;
