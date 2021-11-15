import { v4 as uuidv4 } from 'uuid';

const eventsReducer = (state, action) => {
  let availability;
  if (action.eventId) {
    availability = state.find((e) => e.id === action.eventId).availability;
  }
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
    case 'addNewEvent':
      const newEvent = {
        id: uuidv4(),
        name: action.name,
        desc: action.desc,
        start: null,
        end: null,
        creator: action.creator,
        todos: [],
        availability: []
      };
      return [...state, newEvent];
    case 'setNewDate':
      const { newDate } = action;
      return state.map((e) =>
        action.eventId === e.id ? { ...e, [action.setting]: newDate } : e
      );
    case 'addSchedule':
      const newSchedule = {
        username: action.userName,
        schedules: action.schedule
      }
      availability.push(newSchedule)
      return state.map((e) => (e.id === action.eventId ? { ...e, availability } : e ))
    case 'deleteSchedule':
      const deletedAvailability = availability.filter((a) => a.username !== action.userName)
      return state.map((e) => 
        action.eventId === e.id ? { ...e, availability: deletedAvailability } : e
      )
    default:
      return state;
  }
};
export default eventsReducer;
