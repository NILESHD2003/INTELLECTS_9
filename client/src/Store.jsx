import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./User/Login_auth";
import Sign_in from "./User/SignUp_auth";
export const store = configureStore({
  reducer: {
    user: dataSlice,
    sign: Sign_in,
  },
});
