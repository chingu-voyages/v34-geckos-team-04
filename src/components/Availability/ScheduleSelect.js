import React, { useState, useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import ScheduleSelector from 'react-schedule-selector';

const ScheduleSelect = ({ event, userName, eventId, startDate }) => {
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
          hourlyChunks={1}
          onChange={handleChange}
          startDate={startDate}
        />
  
        <button onClick={submitTime}>submit</button>
      </div>
    );
  };
  
  export default ScheduleSelect;
  