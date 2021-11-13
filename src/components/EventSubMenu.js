import React from 'react';
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
export default function EventSubMenu(props) {
  const { name, desc, start, end, timezone, id, googleEventId } = props.event;
  const { dispatch } = props;
  const { edit, setEdit } = props.edit;

  const publishTheCalendarEvent = (event) => {
    if (!googleEventId) {
      try {
        window.gapi.client.load('calendar', 'v3', () => {
          var request = window.gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          });

          request.execute((event) => {
            console.log('Event created: ', event);
            window.open(event.htmlLink);
            dispatch({
              type: 'addGoogleEventId',
              eventId: id,
              googleEventId: event.id,
            });
          });
        });
      } catch (error) {
        console.error(error);
      }
    } else console.warn('Event already created.');
  };

  function handleIconClick(iconClicked) {
    if (iconClicked === 'Share') {
      let event = {
        summary: name,
        description: desc,
        end: {
          dateTime: end,
          timeZone: timezone,
        },
        start: {
          dateTime: start,
          timeZone: timezone,
        },
      };
      publishTheCalendarEvent(event);
    } else if (iconClicked === 'Edit') {
      setEdit(!edit);
    }
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
