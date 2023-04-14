import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100500,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
  },
});

export const { increment } = myValueSlice.actions;

// export const increment = createAction('counter/increment');
// export const decrement = createAction('counter/decrement');

// const myReducer = createReducer(100499, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});
