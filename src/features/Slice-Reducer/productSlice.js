import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../Data/productData";

const productSlice = createSlice({
  name: "products",
  initialState: productData,
  reducers: {
    addProduct: (state, action) => {
      return state;
    },
  },
});

const { reducer, actions } = productSlice;
export const { addProduct } = actions;
export default reducer;
