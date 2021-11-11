import { Icon } from '@iconify/react';
import { useState, useContext } from 'react';
import { EventsContext } from '../contexts/EventsContext';
import { UserContext } from '../contexts/UserContext';
import PrioSelector from './PrioSelector';

const NewToDo = (props) => {
  const [taskName, setTaskName] = useState('');
  const [assignee, setAssignee] = useState('');
  const [prioSelector, setPrioSelector] = useState(true);
  const [prio, setPrio] = useState('');
  const { dispatch } = useContext(EventsContext);

  const handleClick = () => {
    if (taskName.length > 0 && assignee.length > 0) {
      dispatch({
        type: 'addTodo',
        eventId: props.eventId,
        name: taskName,
        assignee,
        prio,
      });
      setPrioSelector(false);
      setPrio('');
      setTaskName('');
      setAssignee('');
      props.setAddTask(false);
    }
  };

  return (
    <div className='flex flex-row w-full justify-between items-center relative'>
      <div className='flex flex-row items-center'>
        <span
          className={`${
            prio === ''
              ? ''
              : prio === 'high'
              ? 'bg-prioHigh'
              : prio === 'medium'
              ? 'bg-prioMedium'
              : prio === 'low'
              ? 'bg-prioLow'
              : ''
          } w-2.5 h-16 ${prio === '' && 'border-2'} cursor-pointer`}
          onClick={() => setPrioSelector(!prioSelector)}
        ></span>
        {prioSelector && (
          <PrioSelector setPrio={setPrio} setPrioSelector={setPrioSelector} />
        )}
        <input
          type='checkbox'
          className='form-checkbox rounded-full w-12 h-12 ml-2 text-blue-400 focus:ring-0 hidden sm:block'
          disabled
        />
        <input
          type='text'
          name=''
          id=''
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder='Enter a new task'
          className='form-input border h-8 w-full ml-3 rounded-full flex-shrink'
        />
      </div>
      <div className='flex items-center'>
        <input
          type='text'
          name=''
          id=''
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          placeholder='Enter a name to assign'
          className='form-input border h-8 w-full ml-3 rounded-full flex-shrink'
        />
        <Icon
          icon='fluent:checkmark-12-filled'
          className='ml-4 w-8 h-10'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
export default NewToDo;
