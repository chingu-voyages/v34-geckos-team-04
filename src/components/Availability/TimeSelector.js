import React, { useState, useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import ScheduleSelector from 'react-schedule-selector';

const TimeSelector = (props) => {
  const { userName, eventId } = props;
  const { dispatch } = useContext(EventsContext);
  const [schedule, setSchedule] = useState([]);

  const handleChange = (newSchedule) => {
    setSchedule(newSchedule);
  };

  const submitTime = (e) => {
    e.preventDefault();
    dispatch({ type: 'addSchedule', schedule, eventId, userName });
  };

  return (
    <div>
      <ScheduleSelector
        selection={schedule}
        numDays={5}
        minTime={8}
        maxTime={22}
        hourlyChunks={2}
        onChange={handleChange}
      />

      <button onClick={submitTime}>submit</button>
    </div>
  );
};

export default TimeSelector;
