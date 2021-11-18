import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
const data = JSON.parse(localStorage.getItem("checkout-list"));
const initialState = data ? data : [];
const checkOutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCheckout: (state, action) => {
      const checkout = action.payload;
      const date = new Date();
      const day = date.getDate();
      const getMonth = new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(date);
      const year = date.getFullYear();
      const dateCreated = `${getMonth} ${day}, ${year}`;
      const user = JSON.parse(localStorage.getItem("user-login"));
      state.unshift({
        id: uuid(),
        product: [...checkout],
        status: "Pending",
        date: dateCreated,
        userId: user.id,
      });
      localStorage.setItem("checkout-list", JSON.stringify(state));
    },
    removeOrder: (state, action) => {
      const order = action.payload;
      const user = JSON.parse(localStorage.getItem("user-login"));
      const findIndex = state.findIndex(
        (x) => x.id === order.id && x.userId === user.id
      );
      if (findIndex >= 0) {
        state.splice(findIndex, 1);
      }
      localStorage.setItem("checkout-list", JSON.stringify(state));
    },
  },
});

const { reducer, actions } = checkOutSlice;
export const { addCheckout, removeOrder, removeProductInOrder } = actions;
export default reducer;
