import { useContext } from 'react';
import { EventsContext } from '../contexts/EventsContext';

const ToDoItem = (props) => {
  const { todo, eventId } = props;
  const { eventData, setEventData } = useContext(EventsContext);

  const toggleTodo = (todoClicked) => {
    const todos = eventData.find((e) => e.id === eventId).todos;
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
        if (eventId === e.id) {
          return { ...e, todos: doneTodos };
        } else {
          return e;
        }
      })
    );
  };

  return (
    <li className='flex flex-row items-center mb-8 w-full'>
      <span
        className={`w-2.5 h-16 ${
          todo?.prio === 'high'
            ? 'bg-prioHigh'
            : todo?.prio === 'medium'
            ? 'bg-prioMedium'
            : 'bg-prioLow'
        } ${props.prio === 'hidden' && 'hidden'}`}
      ></span>
      <input
        type='checkbox'
        id={todo.id}
        className='form-checkbox rounded-full w-12 h-12 ml-2 text-blue-400 focus:ring-0'
        onChange={() => toggleTodo(todo)}
        checked={todo.status}
      />
      <label
        htmlFor={todo.id}
        className='ml-3 flex flex-row justify-between w-full'
      >
        <p className=''>{todo.name}</p>
        <p className=''>{todo.assignees}</p>
      </label>
    </li>
  );
};
export default ToDoItem;
