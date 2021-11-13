import ToDoItem from './ToDoItem';
import { useContext } from 'react';
import handleTime from '../utils/handleTime';
import { EventsContext } from '../contexts/EventsContext';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
import EventSubMenu from './EventSubMenu';

export default function EventInfo(props) {
  const { eventId } = useParams();
  const { eventData } = useContext(EventsContext);
  const { url } = useRouteMatch();
  const event = eventData.find((e) => e.id === eventId);

  if (event === undefined) {
    return <p>Event doesn't exist!</p>;
  }

  const todos = event.todos;

  return (
    <div className='mb-20 lg:mt-20 lg:mb-0'>
      <li className='list-none'>
        <div className='flex flex-row justify-around'>
          <div id='left'>
            <p>Name:</p>
            <p>Description:</p>
            {event.start && <p>Starts:</p>}
            {event.end && <p>Ends:</p>}
            <p>Creator:</p>
          </div>
          <div id='right'>
            <p>{event.name}</p>
            <p>{event.desc}</p>
            {event.start && <p>{handleTime(event.start)}</p>}
            {event.end && <p>{handleTime(event.end)}</p>}
            <p>{event.creator}</p>
          </div>
        </div>
        <ul className='bg-red-400 text-black rounded-3xl flex flex-col items-center justify-center shadow-2xl py-6 px-6 max-w-full'>
          {todos.map((todo, index) => (
            <ToDoItem key={index} eventId={eventId} todo={todo} prio='hidden' />
          ))}
          <li>
            <Link to={`${url}/todos`}>Todos List</Link>
          </li>
        </ul>
      </li>
      <EventSubMenu />
    </div>
  );
}
