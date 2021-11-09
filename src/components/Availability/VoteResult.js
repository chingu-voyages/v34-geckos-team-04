import React from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import ScheduleSelector from 'react-schedule-selector';
import { useContext } from 'react';

const VoteResult = (props) => {
  const { eventId } = props;
  const { eventData } = useContext(EventsContext);
  const schedule = eventData.find((e) => e.id === eventId).schedule;

  return (
    <ScheduleSelector
      // showing selected time from all users
      selection={schedule}
    />
  );
};

export default VoteResult;
