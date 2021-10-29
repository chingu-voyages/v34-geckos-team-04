import { createSlice } from '@reduxjs/toolkit';

const initialEventsState = {
  //I want to get the id of an event
  events: [{ id: 1, start: null, end: null }],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: initialEventsState,
  reducers: {
    setStartDate(state, action) {
      state.events.start = action.payload;
      console.log(state.events);
    },
    setEndDate(state, action) {
      state.events.end = action.payload;
      console.log(state.events);
    },
  },
});

export default eventsSlice.reducer;
export const { setStartDate, setEndDate } = eventsSlice.actions;
