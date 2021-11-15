import React, { useState, useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
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
      <DesktopDateTimePicker
        value={date}
        onChange={changeDateHandler}
        minDateTime={minDateTime}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
