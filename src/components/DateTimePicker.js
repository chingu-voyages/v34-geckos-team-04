import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDateTimePicker from '@mui/lab/DesktopDateTimePicker';
import TextField from '@mui/material/TextField';

import { setEventDateAndTime } from '../store/events-slice';

const DateTimePicker = ({ minDateTime }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());

  const changeDateHandler = (newValue) => {
    setValue(newValue);
    dispatch(setEventDateAndTime(newValue));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDateTimePicker
        value={value}
        onChange={changeDateHandler}
        minDateTime={minDateTime}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateTimePicker;
