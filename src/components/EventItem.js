import handleTime from '../utils/handleTime';

export default function EventItem(props) {
  const { event } = props;

  function handleClick() {
    props.onClick(event.id);
  }

  return (
    <li onClick={handleClick}>
      <p>{event.name}</p>
      <p>{handleTime(event.start, event.end)}</p>
    </li>
  );
}
