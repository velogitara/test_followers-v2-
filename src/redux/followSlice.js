import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const myValueSlice = createSlice({
  name: 'filterValue',
  initialState: { follow: 'show all' },
  reducers: {
    update(state, action) {
      console.log(action);
      state.follow = action.payload;
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  myValueSlice.reducer
);

export const { update } = myValueSlice.actions;
