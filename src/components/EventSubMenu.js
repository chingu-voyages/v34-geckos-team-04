import React from 'react';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const eventSubMenu = [
  {
    name: 'Availability',
    icon: 'fa-solid:user-clock',
    isNavLink: true,
    path: '/availability',
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
export default function EventSubMenu() {
  function handleIconClick(iconClicked) {
    let iconName;
    if (iconClicked.target.tagName === 'svg') {
      iconName = iconClicked.target.parentElement.attributes.name.value;
    } else if (iconClicked.target.tagName === 'path') {
      iconName =
        iconClicked.target.parentElement.parentElement.attributes.name.value;
    }
    console.log(iconClicked.target);
    if (iconName === 'Share') {
      handleShareClick();
    } else if (iconName === 'Edit') {
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
      <li key={icon.name} name={icon.name} className='lg:flex lg:items-center'>
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
            onClick={handleIconClick}
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
