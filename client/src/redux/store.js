import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../redux/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userSliceReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
