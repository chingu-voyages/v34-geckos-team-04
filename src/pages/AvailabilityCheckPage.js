// import { useContext } from 'react';
// import { useParams } from 'react-router';
// import { EventsContext } from '../contexts/EventsContext';
import SetDate from '../components/SetDate';
import TimeVote from '../components/TimeVote';

const AvailabilityCheckPage = () => {
  //open page for the selected event
  //   const { eventId } = useParams();
  //   const { eventData } = useContext(EventsContext);
  //   const event = eventData.find((e) => e.id === eventId);

  return (
    <div>
      <TimeVote />
      <SetDate />
    </div>
  )
};

export default AvailabilityCheckPage;
