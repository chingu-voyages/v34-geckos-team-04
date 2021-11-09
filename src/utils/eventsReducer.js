import { v4 as uuidv4 } from 'uuid';

const eventsReducer = (state, action) => {
  const todos = state.find((e) => e.id === action.eventId).todos;

  switch (action.type) {
    case 'toggleTodo':
      // gets event todos from state
      // creates a new updatedTodos array to toggle status
      const updatedTodos = todos.map((todo) =>
        todo.id === action.todoClicked
          ? { ...todo, status: !todo.status }
          : todo
      );
      return state.map((e) =>
        action.eventId === e.id ? { ...e, todos: updatedTodos } : e
      );

    case 'deleteTodo':
      const deletedTodos = todos.filter((todo) => todo.id !== action.todoId);
      return state.map((e) =>
        action.eventId === e.id ? { ...e, todos: deletedTodos } : e
      );

    case 'addTodo':
      const newTask = {
        id: uuidv4(),
        prio: action.prio === '' ? 'high' : action.prio,
        name: action.name,
        status: false,
        assignees: action.assignee,
      };

      todos.push(newTask);

      return state.map((e) => (e.id === action.eventId ? { ...e, todos } : e));

    case 'addNewEvent':
      const newEvent = {
        id: uuidv4(),
        name: action.name,
        desc: action.desc,
        start: null,
        end: null,
        creator: action.creator,
        todos: [],
      };

      return [...state, newEvent];

    default:
      return state;
  }
};
export default eventsReducer;
