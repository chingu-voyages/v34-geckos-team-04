import ToDoItem from './ToDoItem';
import { useState } from 'react';
import handleTime from '../utils/handleTime';

export default function EventInfo(props) {
  const { event } = props;
  const [todos, setTodos] = useState(event.todos);

  function handleToDoDoneClick(todoClicked) {
    const doneTodos = todos.map((todo) => {
      if (todo.id === todoClicked.id) {
        return { ...todo, status: !todo.status };
      } else {
        return todo;
      }
    });
    setTodos(doneTodos);
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
