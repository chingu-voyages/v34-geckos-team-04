import ToDoItem from './ToDoItem';
import { useContext } from 'react';
import handleTime from '../utils/handleTime';
import { EventsContext } from '../contexts/EventsContext';
import { useParams } from 'react-router-dom';

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
    <li>
      <p>{event.name}</p>
      <p>{event.desc}</p>
      <p>{handleTime(event.start, event.end)}</p>
      <p>{event.creator}</p>
      <ul>
        {todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} onDoneClick={handleToDoDoneClick} />
        ))}
      </ul>
    </li>
  );
}
