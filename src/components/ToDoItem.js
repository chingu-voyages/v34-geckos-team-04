export default function ToDoItem(props) {
  const { todo } = props;

  function handleDoneClick() {
    console.log('ToDo done clicked');
    props.onDoneClick(todo);
  }

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
        onChange={handleDoneClick}
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
}
