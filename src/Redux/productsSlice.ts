import { createSlice } from '@reduxjs/toolkit';
import { IProductsProps } from '../interfaces';
import type { RootState } from './store';

const initialState: IProductsProps = {
  products: []
}

export const productsSlice = createSlice({
  name: 'Store',
  initialState,
  reducers: {
    loadProduct(state, {payload}) { state.products = payload },
    addProduct(state, {payload}) { state.products.push(payload) }
  }
})
export const { loadProduct, addProduct } = productsSlice.actions;
export const selectProduct = (state: RootState) => state.products;
export default productsSlice.reducer;