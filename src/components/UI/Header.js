import { Icon } from '@iconify/react';

const Header = (props) => {
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
      <img src={props.link} alt='Profile Picture' className='h-10 w-10' />
    </header>
  );
};

export default Header;
