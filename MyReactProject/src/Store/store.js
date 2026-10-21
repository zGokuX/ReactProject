
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js';
import notificationReducer from './notificationSlice.js';

const store = configureStore({
    reducer: {
        user: userReducer,
        notification: notificationReducer
    }
});

export default store;
