import { useState } from 'react';
import { Icon } from '@iconify/react';

const Header = (props) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const showUserInfoHandler = () => {
    setShowUserInfo((prev) => !prev);
  };

  return (
    <header className='bg-white w-screen h-20 flex justify-around items-center lg:hidden'>
      <Icon
        icon='ic:round-arrow-back-ios'
        color='#4a3f3f'
        width='30'
        height='30'
        className={`${props.returnBtn ? '' : 'invisible'}`}
      />
      <h2 className='text-2xl'>{props.title}</h2>
      <img
        src={props.link}
        alt='Profile Picture'
        className='h-10 w-10 relative'
        onClick={showUserInfoHandler}
      />
      {showUserInfo && (
        <div className='bg-gray-400 absolute top-16 right-1 w-60 shadow-md rounded p-2'>
          <div className='font-bold'>Username</div>
          <div>email@gmail.com</div>
          <button className='bg-red-600 rounded text-white mt-5 px-2'>
            SIGN OUT
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
