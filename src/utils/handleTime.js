export default function handleTime(eventStart, eventEnd) {
  const start = moment(eventStart);
  const end = moment(eventEnd);
  // if event starts and ends on the same day
  if (start.format('DDMM') === end.format('DDMM')) {
    return start.format('DD/MM HH:mm') + ' - ' + end.format('HH:mm');
  }
  //if events start and ends on a different day
  else {
    return start.format('DD/MM HH:mm') + ' - ' + end.format('DD/MM HH:mm');
  }
}
