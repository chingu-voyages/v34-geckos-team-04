import React, { Fragment } from 'react';
import TimeRange from './TimeRange';

const TimeSelector = ({ event, userName, eventId }) => {
  return (
    <Fragment>
      <h3 className='text-xl mt-4 mb-4 font-bold'>Enter Availability</h3>
      <TimeRange
        eventDate={event.start}
        event={event}
        eventId={eventId}
        userName={userName}
      />
    </Fragment>
  );
};

export default TimeSelector;
