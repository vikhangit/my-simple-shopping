import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/Slice-Reducer/productSlice";
import newsReducer from "../features/Slice-Reducer/newsSlice";
import cartReducer from "../features/Slice-Reducer/cartSlice";
import userReducer from "../features/Slice-Reducer/userSlice";
import commentReducer from "../features/Slice-Reducer/commentSlice";
import checkoutReducer from "../features/Slice-Reducer/checkoutSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    news: newsReducer,
    cart: cartReducer,
    users: userReducer,
    comment: commentReducer,
    checkout: checkoutReducer,
  },
});
