import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const myValueSlice = createSlice({
  name: 'myValue',
  initialState: { value: 100500 },
  reducers: {
    follow(state, action) {
      state.value += action.payload;
    },
    unfollow(state, action) {
      state.value -= action.payload;
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  myValueSlice.reducer
);

export const { follow, unfollow } = myValueSlice.actions;
