import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    users: [],
    isLogged: false,
    selectedUserLogged: null,
  },

  reducers: {
    create: (state, action) => {
      state.users.push(action.payload);
    },

    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },

    setSelectedUserLogged: (state, action) => {
      state.selectedUserLogged = action.payload;
    },

    logout: (state, action) => {
      state.selectedUserLogged = null;
      state.isLogged = false;
    },

    addUserNotification: (state, action) => {
      if (!state.selectedUserLogged) return;

      if (!Array.isArray(state.selectedUserLogged.content_notify)) {
        state.selectedUserLogged.content_notify = [];
      }

      state.selectedUserLogged.content_notify.push(action.payload);
    },
  },
});

export const {
  create,
  setIsLogged,
  setSelectedUserLogged,
  logout,
  addUserNotification,
} = userSlice.actions;

export default userSlice.reducer;
