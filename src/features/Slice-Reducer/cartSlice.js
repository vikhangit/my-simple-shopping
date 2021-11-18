import { createSlice } from "@reduxjs/toolkit";
const data = JSON.parse(localStorage.getItem("cart-data"));
const initialState = data ? data : [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const user = JSON.parse(localStorage.getItem("user-login"));
      const findIndex = state.findIndex(
        (x) => x.userId === user.id && x.productId === product.id
      );
      console.log(action.payload);
      if (user) {
        if (findIndex >= 0) {
          JSON.parse(localStorage.getItem("count"))
            ? (state[findIndex].quantities += JSON.parse(
                localStorage.getItem("count")
              ))
            : (state[findIndex].quantities += 1);
        } else {
          state.unshift({
            ...product,
            productId: product.id,
            userId: user.id,
            quantities: JSON.parse(localStorage.getItem("count"))
              ? JSON.parse(localStorage.getItem("count"))
              : 1,
            checked: true,
          });
        }
      }
      localStorage.removeItem("count");
      localStorage.setItem("cart-data", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const product = action.payload;
      const user = JSON.parse(localStorage.getItem("user-login"));
      const findIndex = state.findIndex(
        (x) => x.productId === product.id && x.userId === user.id
      );
      if (findIndex >= 0 && state[findIndex].userId === user.id) {
        state[findIndex].quantities += 1;
      }
      localStorage.setItem("cart-data", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const product = action.payload;
      const user = JSON.parse(localStorage.getItem("user-login"));
      const findIndex = state.findIndex(
        (x) => x.productId === product.id && x.userId === user.id
      );
      if (findIndex >= 0) {
        state[findIndex].quantities -= 1;
        if (state[findIndex].quantities < 1) {
          state[findIndex].quantities = 1;
        }
      }
      localStorage.setItem("cart-data", JSON.stringify(state));
    },
    removeProductInCart: (state, action) => {
      const product = action.payload;
      const user = JSON.parse(localStorage.getItem("user-login"));
      const findIndex = state.findIndex(
        (x) => x.productId === product.id && x.userId === user.id
      );
      if (findIndex >= 0) {
        state.splice(findIndex, 1);
      }
      localStorage.setItem("cart-data", JSON.stringify(state));
    },
    changeChecked: (state, action) => {
      const product = action.payload;
      const user = JSON.parse(localStorage.getItem("user-login"));
      const findIndex = state.findIndex(
        (x) => x.userId === user.id && x.productId === product.id
      );
      console.log(findIndex);
      if (findIndex >= 0) {
        state[findIndex].checked = !state[findIndex].checked;
      }
      localStorage.setItem("cart-data", JSON.stringify(state));
    },
    removeAllProductChecked: (state, action) => {
      const product = action.payload;
      product.map((x) => {
        const findIndex = state.findIndex(
          (y) => y.id === x.id && y.userId === x.userId
        );
        if (findIndex >= 0) {
          return state.splice(findIndex, 1);
        }
        return state;
      });
      localStorage.setItem("cart-data", JSON.stringify(state));
    },
  },
});

const { reducer, actions } = cartSlice;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeProductInCart,
  changeChecked,
  removeAllProductChecked,
} = actions;
export default reducer;
