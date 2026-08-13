import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data/users";

const initialState = {
  users: users,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUs: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    editUs: (state, action) => {
      state.users.map((user) =>
        user.id === action.payload.id
          ? { ...user, ...action.payload.data }
          : user,
      );
    },
  },
});

export const { deleteUs, editUs } = userSlice.actions;

export default userSlice.reducer;
