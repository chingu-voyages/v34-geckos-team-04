import React, { useState, useContext } from 'react';
import { EventsContext } from '../contexts/EventsContext';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import TextField from '@mui/material/TextField';

const DateTimePicker = ({ minDateTime, setting }) => {
  const [date, setDate] = useState(new Date());
  const { eventData, setEventData } = useContext(EventsContext);

  const changeDateHandler = (newDate) => {
    setDate(newDate);
    //store in context: event.start or event.end
    setEventData({ ...eventData, [setting]: newDate });
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
