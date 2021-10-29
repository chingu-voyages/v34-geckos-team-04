import { createSlice } from '@reduxjs/toolkit';

const initialEventsState = {
  //I want to get the id of an event
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState: initialEventsState,
  reducers: {
    setEventDateAndTime(state, action) {
      state.events.schedule = {
        start: action.payload.start,
        end: action.payload.end,
      };
    },
  },
});

export default eventsSlice.reducer;
export const { setEventDateAndTime } = eventsSlice.actions;
