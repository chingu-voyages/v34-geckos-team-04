import { v4 as uuidv4 } from 'uuid';
const eventsReducer = (state, action) => {
  switch (action.type) {
    case 'toggleTodo':
      //action: eventId todoId(todoClicked)
      // gets event todos from state
      const todos = state.find((e) => e.id === action.eventId).todos;
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
      const todoArray = state.find((e) => e.id === action.eventId).todos;
      const deletedTodos = todoArray.filter(
        (todo) => todo.id !== action.todoId
      );
      return state.map((e) =>
        action.eventId === e.id ? { ...e, todos: deletedTodos } : e
      );
    case 'addTodo':
      // {id, prio, name, status, assignees}
      const newTask = {
        id: uuidv4(),
        prio: action.prio === '' ? 'high' : action.prio,
        name: action.name,
        status: false,
        assignees: action.assignee,
      };
      const addTodos = state.find((e) => e.id === action.eventId).todos;
      addTodos.push(newTask);
      return state.map((e) =>
        e.id === action.eventId ? { ...e, todos: addTodos } : e
      );
    default:
      return state;
  }
};
export default eventsReducer;
