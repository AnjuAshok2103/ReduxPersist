import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@src/api';
import { UserCredentials } from '@src/types/index.ts';
const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};
export const login = createAsyncThunk(
  'login',
  async (params: UserCredentials, thunkApi) => {
    console.log('Login thunk called with params:', params);
    try {
      const response = await axiosInstance.post('auth/login', {
        username: params.username,
        password: params.password,
      });
      console.log('Login response:', response.data);
      return response.data;
    } catch (error) {
      console.log('Error during login:', error);
      thunkApi.rejectWithValue(error);
    }
  },
);
const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.user = null;
    });
  },
});
export default AuthSlice.reducer;
export const {} = AuthSlice.actions;
