import React, { useState, useContext } from 'react';
import { EventsContext } from '../../contexts/EventsContext';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import TextField from '@mui/material/TextField';
import { UIContext } from '../../contexts/UIContext';

const DateTimePicker = ({ minDateTime, setting, eventId, eventDate }) => {
  const { dispatch } = useContext(EventsContext);
  const [date, setDate] = useState(eventDate);
  const { largeScreen } = useContext(UIContext);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const changeDateHandler = (newDate) => {
    setDate(newDate);
    dispatch({ type: 'setNewDate', eventId, newDate, setting });
    dispatch({ type: 'setTimezone', eventId, timezone });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {largeScreen && (
        <DesktopDateTimePicker
          value={date}
          onChange={changeDateHandler}
          minDateTime={minDateTime}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
      {!largeScreen && (
        <MobileDateTimePicker
          value={date}
          onChange={changeDateHandler}
          minDateTime={minDateTime}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </LocalizationProvider>
  );
};

export default DateTimePicker;
