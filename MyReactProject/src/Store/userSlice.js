
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        create: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { create } = userSlice.actions;

export default userSlice.reducer;
