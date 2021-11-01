import { useParams } from 'react-router';

const AvailabilityCheckPage = () => {
  const { eventId } = useParams();

  return <SetDate />;
};

export default AvailabilityCheckPage;
