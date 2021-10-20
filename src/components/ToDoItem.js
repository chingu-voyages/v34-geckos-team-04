export default function ToDoItem(props) {
  const { todo } = props;

  function handleDoneClick() {
    console.log('ToDo done clicked');
    props.onDoneClick(todo);
  }

  let todoClassToggle;
  if (todo.status) {
    todoClassToggle = 'Todo--done';
  }

  return (
    <li className={todo.status ? 'bg-red-500' : 'bg-green-500'}>
      <button onClick={handleDoneClick}>DONE</button>
      <p>{todo.name}</p>
      <p>{todo.assignees}</p>
    </li>
  );
}
