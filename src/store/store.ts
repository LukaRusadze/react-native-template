import { Middleware, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import { apiSlice } from './features/api/apiSlice';
import createDebugger from 'redux-flipper';

const middlewares: Middleware[] = [apiSlice.middleware];

if (__DEV__) {
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }).concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
