import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const SignupUser = createAsyncThunk(
  "data/signup",
  async (
    { confirmPassword, phone, password, lastName, firstName, email, Otp },
    thunkAPI
  ) => {
    try {
      console.log({
        confirmPassword,
        phone,
        password,
        lastName,
        firstName,
        email,
        Otp,
      });
      const otp = Otp.join("");
      const dataToSend = {
        confirmPassword,
        phone,
        password,
        lastName,
        firstName,
        email,
        otp,
      };
      const resp = await axios.post(
        "https://intellects-9.onrender.com/api/v1/auth/signup",
        dataToSend
      );
      console.log(resp);
      // addUserToLocalStorage(resp.data.user);
      return resp.data;
    } catch (err) {
      console.log("IN Error");
      console.log(error);
    }
  }
);

export const Otp = createAsyncThunk("data/otp", async (formData, thunkAPI) => {
  try {
    console.log();
    const resp = await axios.post(
      "https://intellects-9.onrender.com/api/v1/auth/sendotp",
      { email: `${formData.email}` }
    );
    console.log(resp);
    return resp.data;
  } catch (err) {
    // console.log(error);
    return err;
  }
});

const initialState = {
  FormData: {},
};

const Sign_in = createSlice({
  name: "data",
  initialState,
  reducers: {
    store_data(state, action) {
      state.FormData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignupUser.pending, (state, action) => {
        // state.isLoading = true;
        // state.data = payload.entries;
      })
      .addCase(SignupUser.fulfilled, (state, { payload }) => {
        // state.formData = payload;
        toast.success(`Successfully  Sign up `);
      })
      .addCase(SignupUser.rejected, (state, action) => {
        // state.isLoading = true;
        console.log(action);
      });
  },
});

export const { store_data } = Sign_in.actions;

export default Sign_in.reducer;
