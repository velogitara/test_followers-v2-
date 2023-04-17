import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const myValueSlice = createSlice({
  name: 'filterValue',
  initialState: {
    follow: 'show all',
    limit: 8,
  },
  reducers: {
    update(state, action) {
      state.follow = action.payload;
    },
    resetLimit(state, action) {
      state.limit = action.payload;
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  myValueSlice.reducer
);

export const { update, resetLimit } = myValueSlice.actions;
