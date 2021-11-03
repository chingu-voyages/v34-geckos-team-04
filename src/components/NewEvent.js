import { useContext, useState } from 'react';
import { EventsContext } from '../contexts/EventsContext';
import { UserContext } from '../contexts/UserContext';

const NewEvent = () => {
  const { userData } = useContext(UserContext);
  const { dispatch } = useContext(EventsContext);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    dispatch({
      type: 'addNewEvent',
      name,
      desc,
      creator: userData.name,
    });
    setName('');
    setDesc('');
  };

  return (
    <div className='flex flex-col'>
      <form className='flex flex-row justify-around'>
        <div id='left' className='flex flex-col'>
          <label htmlFor='name'>Name:</label>
          <label htmlFor='description'>Description:</label>
        </div>
        <div id='right' className='flex flex-col'>
          <input
            type='text'
            id='name'
            className='form-input'
            autoComplete='off'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter an event name'
            required
          />
          <input
            type='text'
            id='description'
            className='form-input'
            autoComplete='off'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Enter event description'
            required
          />
        </div>
        <input
          type='submit'
          value='Create event'
          onClick={handleForm}
          disabled={(name === '' || desc === '') && true}
        />
      </form>
    </div>
  );
};
export default NewEvent;
