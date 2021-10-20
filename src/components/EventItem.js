export default function EventItem(props) {
  const { event } = props;
  return (
    <li>
      <p>{event.name}</p>
    </li>
  );
}
