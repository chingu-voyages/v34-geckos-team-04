import React from 'react';
import TimeRange from './TimeRange'

const TimeSelector = ({ event, userName, eventId }) => {

  return (
      <TimeRange eventDate={event.start} event={event} eventId={eventId} userName={userName} />
  );
};

export default TimeSelector;
