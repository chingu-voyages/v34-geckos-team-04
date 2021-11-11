import React, { useContext } from 'react';
import { EventsContext } from '../contexts/EventsContext';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

export default function EventSubMenu() {
  const { eventData } = useContext(EventsContext);
  const [selectedEvent] = eventData.filter((e) => e.selected);

  const eventSubMenu = [
    {
      name: 'Availability',
      icon: 'fa-solid:user-clock',
      isNavLink: true,
      path: `/events/${selectedEvent.id}/availability`,
    },
    {
      name: 'Share',
      icon: 'fa-solid:share-alt',
      isNavLink: false,
    },
    {
      name: 'Edit',
      icon: 'bx:bxs-edit',
      isNavLink: false,
    },
    {
      name: 'Messages',
      icon: 'bx:bxs-message',
      isNavLink: true,
      path: '/messages',
    },
  ];

  function handleIconClick(iconClicked) {
    if (iconClicked === 'Share') {
      handleShareClick();
    } else if (iconClicked === 'Edit') {
      handleEditClick();
    }
  }

  function handleShareClick() {
    alert('Share Event Link');
  }

  function handleEditClick() {
    alert('Edit Event');
  }

  const icon = eventSubMenu.map((icon) => {
    return (
      <li key={icon.name} className='lg:flex lg:items-center'>
        {icon.isNavLink ? (
          <NavLink to={icon.path}>
            <Icon icon={icon.icon} color='#F0D2AC' width={36} height={36} />
          </NavLink>
        ) : (
          <Icon
            icon={icon.icon}
            color='#F0D2AC'
            width={36}
            height={36}
            onClick={() => handleIconClick(icon.name)}
          />
        )}
      </li>
    );
  });

  return (
    <nav className='w-screen h-20 fixed -bottom-0 lg:w-1/4 lg:flex lg:flex-col lg:-top-0 lg:-right-0'>
      <ul className='h-full flex justify-around'>{icon}</ul>
    </nav>
  );
}
