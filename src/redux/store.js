import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './followSlice';
import { userCardsApi } from './userCardsListAPI';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    filterValue: persistedReducer,
    [userCardsApi.reducerPath]: userCardsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    userCardsApi.middleware,
  ],
});

export const persistor = persistStore(store);
