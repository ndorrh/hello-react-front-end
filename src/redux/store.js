import { configureStore } from '@reduxjs/toolkit';
import messageSlice from './messages';

const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
  }
});

export default store;
