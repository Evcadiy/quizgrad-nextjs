"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "@/actions/login";
import { FormValues } from "@/types/formTypes";
import { AuthState } from "@/types/AuthState";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (formData: FormValues) => {
    const response = await login(formData);
    console.log(response.data);
    return response.data;
  }
);

const initialState: AuthState = {
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message || "An error occurred";
      });
  },
});

export default authSlice.reducer;
