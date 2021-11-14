import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { EventsContext } from '../../contexts/EventsContext';
import TimeSelector from './TimeSelector';
import VoteResult from './VoteResult';
import { UserContext } from '../../contexts/UserContext';

const TimeVote = () => {
  const { eventId } = useParams();
  const { eventData } = useContext(EventsContext);
  const { userData: name } = useContext(UserContext);
  const availability = eventData.find((e) => e.id === eventId).availability;
  const usernames = availability.map(a => a.username);
  const submitted = usernames.includes(name);

  return (
    <div>
      {/* if user already select their available time */}
      {submitted ? (
        <VoteResult eventId={eventId} />
      ) : (
        <TimeSelector eventId={eventId} userName={name} />
      )}
    </div>
  );
};

export default TimeVote;
