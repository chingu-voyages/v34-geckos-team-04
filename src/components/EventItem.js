import handleTime from '../utils/handleTime';

export default function EventItem(props) {
  const { event } = props;

  return (
    <li>
      <p>{event.name}</p>
      <p>{handleTime(event.start, event.end)}</p>
    </li>
  );
}
