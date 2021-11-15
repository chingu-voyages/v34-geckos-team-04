import React from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import ScheduleSelector from 'react-schedule-selector';
import { useContext } from 'react';

const VoteResult = (props) => {
  const { eventId } = props;
  const { eventData } = useContext(EventsContext);
  const availability = eventData.find((e) => e.id === eventId).availability;
  const schedule = availability.map(a => a.schedules);
  const selectedTime = []
  schedule.forEach(s1 => s1.forEach(s2 => 
    selectedTime.push(s2)
  ))
  const votingCount = {}
  selectedTime.forEach(e => votingCount[e] ? votingCount[e]++ : votingCount[e] = 1)
  console.log(availability)
  console.log(schedule)
  console.log(selectedTime)
  console.log(votingCount[selectedTime[0]])

  const renderCustomDateCell = (time, selected, innerRef) => (
    <div style={{ textAlign: 'center' }} ref={innerRef}>
      {selected ? `${votingCount[time]}` : ' '}
    </div>
  )
    
//renderDateCell={renderCustomDateCell}
  return (
    <ScheduleSelector
      // showing selected time from all users
      selection={selectedTime}
      numDays={5}
      minTime={8}
      maxTime={22}
      hourlyChunks={1}
      renderDateCell={renderCustomDateCell}
    />
  );
};

export default VoteResult;
