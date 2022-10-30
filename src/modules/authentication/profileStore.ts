import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: [],
    newUser: null,
  },
  reducers: {
    reset: (state) => {
      state.newUser = null;
    },
    // LOGIN REDUCER
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // REGISTER REDUCER
    registerStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.newUser = action.payload;
    },
    registerFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // LOGOUT REDUCER
    logoutStart: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
    },
    logoutFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutStart,
  logoutSuccess,
  logoutFailed,
} = authSlice.actions;
export const { reset } = authSlice.actions;
export default authSlice.reducer;
