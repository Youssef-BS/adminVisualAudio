import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService  from "./authServices";

const initialState = {
  user: authService.getCurrentUser(), 
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const login = createAsyncThunk(
  "/login",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const logout = createSlice({
  name: 'logout',
  initialState,
  reducers: {
    logoutSuccess: (state) => {
      state.user = null;
    },
  },
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload; 
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.error.message || "An error occurred";
      });
  },
});

export const selectCurrentUser = (state) => state.auth.user; 

export const { logoutSuccess } = logout.actions;

export default authSlice.reducer; 
