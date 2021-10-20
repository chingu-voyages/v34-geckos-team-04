import moment from 'moment';

export default function EventItem(props) {
  const { event } = props;

  // const startTime = moment(event.start).format('DD/MM HH:mm');
  // const endTimeShort = moment(event.end).format('HH:mm');
  // const endTimeLong = moment(event.end).format('DD/MM HH:mm')
  // const startDay = moment(event.start).format('D');
  // const endDay = moment(event.end).format('D');

  function handleTime() {
    const start = moment(event.start);
    const end = moment(event.end);
    // if event starts and ends on the same day
    if (start.format('DDMM') === end.format('DDMM')) {
      return start.format('DD/MM HH:mm') + ' - ' + end.format('HH:mm');
    }
    //if events start and ends on a different day
    else {
      return start.format('DD/MM HH:mm') + ' - ' + end.format('DD/MM HH:mm');
    }
  }

  return (
    <li>
      <p>{event.name}</p>
      <p>{handleTime()}</p>
    </li>
  );
}
