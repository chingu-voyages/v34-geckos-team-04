import { v4 as uuidv4 } from 'uuid';

const events = [
  {
    id: 'event1',
    name: 'EVENT-1',
    desc: 'Description of Event-1',
    start: '2021-10-28T09:00:00',
    end: '2021-10-29T19:00:00',
    creator: 'Emir',
    todos: [
      { id: uuidv4(), name: 'TODO-1', status: false, assignees: 'Emir' },
      { id: uuidv4(), name: 'TODO-2', status: true, assignees: 'Patrik' },
    ],
  },
  {
    id: 'event2',
    name: 'EVENT-2',
    desc: 'Description of Event-2',
    start: '2021-10-29T09:00:00',
    end: '2021-10-29T19:00:00',
    creator: 'Patrik',
    todos: [
      { id: uuidv4(), name: 'TODO-1', status: false, assignees: 'Emir' },
      { id: uuidv4(), name: 'TODO-2', status: true, assignees: 'Patrik' },
    ],
  },
  {
    id: 'event3',
    name: 'EVENT-3',
    desc: 'Description of Event-3',
    start: '2021-10-30T09:00:00',
    end: '2021-10-30T19:00:00',
    creator: 'Teri',
    todos: [
      { id: uuidv4(), name: 'TODO-1', status: false, assignees: 'Emir' },
      { id: uuidv4(), name: 'TODO-2', status: true, assignees: 'Patrik' },
    ],
  },
  {
    id: 'event4',
    name: 'EVENT-4',
    desc: 'Description of Event-4',
    start: '2021-10-31T09:00:00',
    end: '2021-10-31T19:00:00',
    creator: 'Aya',
    todos: [
      { id: uuidv4(), name: 'TODO-1', status: false, assignees: 'Emir' },
      { id: uuidv4(), name: 'TODO-2', status: true, assignees: 'Patrik' },
    ],
  },
  {
    id: 'event5',
    name: 'EVENT-5',
    desc: 'Description of Event-5',
    start: '2021-10-01T09:00:00',
    end: '2021-10-01T19:00:00',
    creator: 'Jihye',
    todos: [
      { id: uuidv4(), name: 'TODO-1', status: false, assignees: 'Emir' },
      { id: uuidv4(), name: 'TODO-2', status: true, assignees: 'Patrik' },
    ],
  },
];

export default events;
