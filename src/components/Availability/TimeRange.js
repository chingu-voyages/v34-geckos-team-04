import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import ScheduleSelect from './ScheduleSelect';

const TimeRange = ({ eventDate, event, userName, eventId }) => {
  const [date, setDate] = useState(eventDate);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture
        label='START DATE'
        openTo='day'
        views={['year', 'month', 'day']}
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <ScheduleSelect
        startDate={date}
        event={event}
        eventId={eventId}
        userName={userName}
      />
    </LocalizationProvider>
  );
};

export default TimeRange;