import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { EventsContext } from '../contexts/EventsContext';
import ToDoItem from './ToDoItem';

const ToDoList = (props) => {
  const { eventId } = useParams();
  const { eventData } = useContext(EventsContext);
  const todos = eventData.find((e) => e.id === eventId).todos;
  console.log(todos);

  return (
    <React.Fragment>
      {/* Link is temporary until menu/header merged
      It adds ability to go back to event info page */}
      <Link to={`/events/${eventId}`} className=''>
        {`< Back to event info`}
      </Link>
      <ul>
        {todos.map((todo) => {
          return <ToDoItem key={todo.id} eventId={eventId} todo={todo} />;
        })}
      </ul>
    </React.Fragment>
  );
};
export default ToDoList;
