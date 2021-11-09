import React, { useState, useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import TextField from '@mui/material/TextField';

const DateTimePicker = ({ minDateTime, setting, eventId }) => {
  const { dispatch } = useContext(EventsContext);
  const [date, setDate] = useState(new Date());

  const changeDateHandler = (newDate) => {
    setDate(newDate);
    //update event.start or event.end for the selected event
    dispatch({ type: 'setNewDate', eventId, newDate, setting });
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
