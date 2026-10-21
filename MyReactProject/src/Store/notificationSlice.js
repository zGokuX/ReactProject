import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        number: 0,
        content: []
    },
    reducers: {
        setNotificationNumber: (state, action) => {
            state.number = action.payload;
        },
        incrementNotification: (state) => {
            state.number += 1;
        },

        decreaseOneNotification: (state) => {
            state.number -= 1;
        },
        resetNotifications: (state) => {
            state.number = 0;
        },

        setContentOfNotification: (state, action) => {
            state.content.push(action.payload);
        }
    }
});

export const {
    setNotificationNumber,
    incrementNotification,
    resetNotifications,
    setContentOfNotification
} = notificationSlice.actions;

export default notificationSlice.reducer;