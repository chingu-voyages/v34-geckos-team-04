import ToDoItem from './ToDoItem';
import { useContext } from 'react';
import handleTime from '../utils/handleTime';
import { EventsContext } from '../contexts/EventsContext';
import { useParams, Link } from 'react-router-dom';

export default function EventInfo(props) {
  const { eventId } = useParams();
  const { eventData } = useContext(EventsContext);
  const event = eventData.find((e) => e.id === eventId);

  if (event === undefined) {
    return <p>Event doesn't exist!</p>;
  }

  const todos = event.todos;

  return (
    <li className='list-none'>
      {/* Link is temporary until menu/header merged */}
      {/* It adds ability to go back to events page on mobile screens */}
      <Link
        to='/events'
        onClick={() => props.setActiveEvent(false)}
        className='inline-block lg:hidden'
      >
        {`< Back to events`}
      </Link>

      <div className='flex flex-row justify-around'>
        <div id='left'>
          <p>Name:</p>
          <p>Description:</p>
          <p>Starts:</p>
          <p>Ends:</p>
          <p>Creator:</p>
        </div>
        <div id='right'>
          <p>{event.name}</p>
          <p>{event.desc}</p>
          <p>{handleTime(event.start)}</p>
          <p>{handleTime(event.ends)}</p>
          <p>{event.creator}</p>
        </div>
      </div>
      <ul className='bg-red-400 text-black rounded-3xl flex flex-col items-center justify-center shadow-2xl py-6 px-6 max-w-full'>
        {todos.map((todo, index) => (
          <ToDoItem key={index} eventId={eventId} todo={todo} prio='hidden' />
        ))}
      </ul>
    </li>
  );
}
