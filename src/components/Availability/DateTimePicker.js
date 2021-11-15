import React, { useState, useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import TextField from '@mui/material/TextField';

const DateTimePicker = ({ minDateTime, setting, eventId, eventDate }) => {
  const { dispatch } = useContext(EventsContext);
  const [date, setDate] = useState(eventDate);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const changeDateHandler = (newDate) => {
    setDate(newDate);
    dispatch({ type: 'setNewDate', eventId, newDate, setting });
    dispatch({ type: 'setTimezone', eventId, timezone });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='hidden lg:flex'>
        <DesktopDateTimePicker
          value={date}
          inputFormat='dd/MM/yyyy hh:mm a'
          onChange={changeDateHandler}
          minDateTime={minDateTime}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className='flex lg:hidden'>
        <MobileDateTimePicker
          value={date}
          inputFormat='dd/MM/yyyy hh:mm a'
          onChange={changeDateHandler}
          minDateTime={minDateTime}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateTimePicker;
