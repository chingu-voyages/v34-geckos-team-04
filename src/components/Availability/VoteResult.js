import React from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import ScheduleSelector from 'react-schedule-selector';
import { useContext } from 'react';

const VoteResult = (props) => {
  const { eventId } = props;
  const { eventData } = useContext(EventsContext);
  const availability = eventData.find((e) => e.id === eventId).availability;
  const schedule = availability.map(a => a.schedules);


  return (
    <ScheduleSelector
      // showing selected time from all users
      selection={schedule}
    />
  );
};

export default VoteResult;
