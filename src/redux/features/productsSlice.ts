import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@src/api';
import { ProductsResponse } from '@src/types';

interface ProductsState {
  products: ProductsResponse | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
const initialState: ProductsState = {
  products: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};
export const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get('products');
      console.log('Products response:', response.data);
      return response.data;
    } catch (error) {
      console.log('Error during Products:', error);
      thunkApi.rejectWithValue(error);
    }
  },
);
const ProductsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProducts.pending, state => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, state => {
      state.isLoading = false;
      state.isError = true;
      state.products = null;
    });
  },
});
export default ProductsSlice.reducer;
export const {} = ProductsSlice.actions;
