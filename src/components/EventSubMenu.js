import React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Icon } from '@iconify/react';

const eventSubMenu = [
  { name: 'Availability', icon: 'fa-solid:user-clock' },
  { name: 'Share', icon: 'fa-solid:share-alt' },
  { name: 'Edit', icon: 'bx:bxs-edit' },
  { name: 'Messages', icon: 'bx:bxs-message' },
];
export default function EventSubMenu() {
  const [largeScreen, setLargeScreen] = useState(false);

  const setNewWidth = () => {
    if (window.innerWidth >= 1023) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  };

  //initial rendering
  useEffect(() => {
    setNewWidth();
  }, []);

  //detecting size change
  useLayoutEffect(() => {
    window.addEventListener('resize', setNewWidth);
    return () => window.removeEventListener('resize', setNewWidth);
  }, [setNewWidth]);

  const icon = eventSubMenu.map((icon) => {
    return (
      <li key={icon.name} className='lg:flex lg:items-center'>
        <Icon icon={icon.icon} color='#F0D2AC' width={36} height={36} />
      </li>
    );
  });

  return (
    <nav className='w-screen h-20 fixed -bottom-0 lg:w-1/4 lg:flex lg:flex-col lg:-top-0 lg:-right-0'>
      <ul className='h-full flex justify-around'>{icon}</ul>
    </nav>
  );
}
