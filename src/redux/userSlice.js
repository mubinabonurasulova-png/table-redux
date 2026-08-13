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
  },
});

export const { deleteUs } = userSlice.actions;

export default userSlice.reducer;
