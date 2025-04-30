import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import matchReducer from './slices/matchSlice';
import venueReducer from './slices/venueSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    matches: matchReducer,
    venues: venueReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store; 