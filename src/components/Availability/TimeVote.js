import React, { useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import TimeSelector from './TimeSelector';
import VoteResult from './VoteResult';
import { UserContext } from '../../contexts/UserContext';

const TimeVote = ({ event, eventId }) => {
  const { eventData } = useContext(EventsContext);
  const { userData: name } = useContext(UserContext);
  const availability = eventData.find((e) => e.id === eventId).availability;
  const usernames = availability.map(a => a.username);
  const submitted = usernames.includes(name);

  return (
    <div>
      {/* if user already select their available time */}
      {submitted ? (
        <VoteResult eventId={eventId} userName={name}/>
      ) : (
        <TimeSelector event={event} eventId={eventId} userName={name} />
      )}
    </div>
  );
};

export default TimeVote;
