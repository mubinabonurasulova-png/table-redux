import { createSlice, nanoid } from "@reduxjs/toolkit";
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
    updateUser(state, action) {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = { ...state.users[index], ...action.payload };
      }
    },
    addUser(state, action) {
      const newUser = {
        id: nanoid(),
        ...action.payload,
      };
      state.users.push(newUser);
    },
  },
});

export const { deleteUs, updateUser, addUser } = userSlice.actions;

export default userSlice.reducer;
