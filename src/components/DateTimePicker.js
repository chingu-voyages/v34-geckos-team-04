import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import TextField from '@mui/material/TextField';

import { setStartDate, setEndDate } from '../store/events-slice';

const DateTimePicker = ({ minDateTime, setting }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());

  const changeDateHandler = (newDate) => {
    setDate(newDate);
    if (setting === 'start') {
      dispatch(setStartDate(newDate));
    } else if (setting === 'end') {
      dispatch(setEndDate(newDate));
    }
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
