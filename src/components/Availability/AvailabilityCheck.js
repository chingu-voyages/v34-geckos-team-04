import React, { Fragment, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import SetDate from './SetDate';
import TimeVote from './TimeVote';
import { EventsContext } from '../../contexts/EventsContext';

const AvailabilityCheck = () => {
  const { eventId } = useParams();
  const { eventData } = useContext(EventsContext);

  //NEED TO CHANGE BELOW BASED ON THE REDUCER FUNCTION
  //const votes = eventData.find((e) => e.id === eventId).votes;
  // const { start } = eventData.find((e) => e.id === eventId);
  // const { end } = eventData.find((e) => e.id === eventId);

  return (
    <Fragment>
      <Link to={`/events/${eventId}`} className=''>
        {`< Back to event info`}
      </Link>
      <SetDate />
      <TimeVote />
    </Fragment>
  );
};

export default AvailabilityCheck;
