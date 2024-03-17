import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  getLoginFromLocalStorage,
} from "../Utils/localStorage";

export const loginUser = createAsyncThunk(
  "data/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const user_info = { email, password };
      const resp = await axios.post(
        "https://intellects-9.onrender.com/api/v1/auth/login",
        user_info
      );

      addUserToLocalStorage(resp.data.user);
      return resp.data;
    } catch (error) {
      return error;
    }
  }
);

export const setUser = (user) => ({
  type: "data/setUser",
  payload: user,
});
const initialState = {
  isLoading: false,
  isLoggedIn: getLoginFromLocalStorage(),
  user: getUserFromLocalStorage(),
  // user_info: { email: "test123@gmail.com", password: "test@123" }, admin email
  user_info: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      removeUserFromLocalStorage();
    },
    updateUserInfo(state, action) {
      // console.log(action.payload);
      state.user_info = action.payload;
    },
    temp(state) {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        // state.data = payload.entries;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.data = payload.entries;
        console.log(payload.user);
        addUserToLocalStorage(payload.user);
        toast.success(`Successfully  logged in as ${payload.user.firstName}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = true;
        toast.error(payload);
      });
  },
});

export const { temp, logout, updateUserInfo } = dataSlice.actions;

export default dataSlice.reducer;
