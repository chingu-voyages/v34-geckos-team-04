import ToDoItem from './ToDoItem';
import { useContext } from 'react';
import handleTime from '../utils/handleTime';
import { EventsContext } from '../contexts/EventsContext';
import { useParams, Link } from 'react-router-dom';
import EventSubMenu from './EventSubMenu';

export default function EventInfo(props) {
  const { eventId } = useParams();
  const { eventData, setEventData } = useContext(EventsContext);
  const event = eventData.find((e) => e.id === eventId);

  if (event === undefined) {
    return <p>Event doesn't exist!</p>;
  }

  const todos = event.todos;

  function handleToDoDoneClick(todoClicked) {
    const doneTodos = todos.map((todo) => {
      if (todo.id === todoClicked.id) {
        return { ...todo, status: !todo.status };
      } else {
        return todo;
      }
    });
    // updates EventsContext
    setEventData(
      eventData.map((e) => {
        if (event.id === e.id) {
          return { ...e, todos: doneTodos };
        } else {
          return e;
        }
      })
    );
  }

  return (
    <div>
      <li className='list-none'>
        {/* Link is temporary until menu/header merged */}
        {/* It adds ability to go back to events page on mobile screens */}
        <Link
          to='/events'
          onClick={() => props.setActiveEvent(false)}
          className='inline-block lg:hidden'
        >
          Back to events
        </Link>
        {/* <table className='border-separate'>
        <tbody>
          <tr>
            <th className='mr-10'>Name</th>
            <td>{event.name}</td>
          </tr>
          <tr>
            <th className='mr-10'>Description</th>
            <td>{event.desc}</td>
          </tr>
          <tr>
            <th className='mr-10'>Starts</th>
            <td>{handleTime(event.start)}</td>
          </tr>
          <tr>
            <th className='mr-10'>Name</th>
            <td>{event.name}</td>
          </tr>
          <tr>
            <th className='mr-10'>Creator</th>
            <td>{event.creator}</td>
          </tr>
        </tbody>
      </table> */}
        <div>
          <div className='flex flex-row justify-center'>
            <p className='w-1/3'>Name:</p>
            <p className='w-2/3'>{event.name}</p>
          </div>
          <div className='flex flex-row justify-center'>
            <p className='w-1/3'>Description:</p>
            <p className='w-2/3'>{event.desc}</p>
          </div>
          <div className='flex flex-row justify-center'>
            <p className='w-1/3'>Starts:</p>
            <p className='w-2/3'>{handleTime(event.start)}</p>
          </div>
          <div className='flex flex-row justify-center'>
            <p className='w-1/3'>Ends:</p>
            <p className='w-2/3'>{handleTime(event.ends)}</p>
          </div>
          <div className='flex flex-row justify-center'>
            <p className='w-1/3'>Creator:</p>
            <p className='w-2/3'>{event.creator}</p>
          </div>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <ToDoItem
              key={index}
              todo={todo}
              onDoneClick={handleToDoDoneClick}
            />
          ))}
        </ul>
      </li>
      <EventSubMenu />
    </div>
  );
}
