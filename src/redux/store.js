import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

const myReducer = createReducer(100499, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
});
