import { createSlice } from "@reduxjs/toolkit";
import { userData } from "../Data/userData";
import { v4 as uuid } from "uuid";
const data = JSON.parse(localStorage.getItem("user-list"));
const initialState = data ? data : userData;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNew: (state, action) => {
      const user = action.payload;
      const newUser = {
        id: uuid(),
        userName: user.userName,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: "",
        email: "",
        address: "",
        role: "user",
      };
      state.push(newUser);
      localStorage.setItem("user-list", JSON.stringify(state));
    },
    login: (state, action) => {
      const user = action.payload;
      const findUser = state.find(
        (x) => x.userName === user.userName && x.password === user.password
      );
      if (findUser) {
        const data = { ...findUser };
        localStorage.setItem("user-login", JSON.stringify(data));
      }
    },
    logout: (state, action) => {
      const user = action.payload;
      const findUser = state.findIndex((x) => x.id === user.id);
      if (findUser >= 0) {
        localStorage.removeItem("user-login");
      }
    },
    updateFirstName: (state, action) => {
      const userLogin = JSON.parse(localStorage.getItem("user-login"));
      const newUser = action.payload;
      const findUser = state.findIndex((x) => x.id === userLogin.id);
      if (findUser >= 0) {
        state[findUser].firstName = newUser.firstName;
        localStorage.removeItem("user-list");
        localStorage.setItem("user-login", JSON.stringify(state[findUser]));
      }
      localStorage.setItem("user-list", JSON.stringify(state));
    },
    updateLastName: (state, action) => {
      const userLogin = JSON.parse(localStorage.getItem("user-login"));
      const newUser = action.payload;
      const findUser = state.findIndex((x) => x.id === userLogin.id);
      if (findUser >= 0) {
        state[findUser].lastName = newUser.lastName;
        localStorage.removeItem("user-list");
        localStorage.setItem("user-login", JSON.stringify(state[findUser]));
      }
      localStorage.setItem("user-list", JSON.stringify(state));
    },
    updateEmail: (state, action) => {
      const userLogin = JSON.parse(localStorage.getItem("user-login"));
      const newUser = action.payload;
      const findUser = state.findIndex((x) => x.id === userLogin.id);
      if (findUser >= 0) {
        state[findUser].email = newUser.email;
        localStorage.removeItem("user-list");
        localStorage.setItem("user-login", JSON.stringify(state[findUser]));
      }
      localStorage.setItem("user-list", JSON.stringify(state));
    },
    updatePhone: (state, action) => {
      const userLogin = JSON.parse(localStorage.getItem("user-login"));
      const newUser = action.payload;
      const findUser = state.findIndex((x) => x.id === userLogin.id);
      if (findUser >= 0) {
        state[findUser].phone = newUser.phone;
        localStorage.removeItem("user-list");
        localStorage.setItem("user-login", JSON.stringify(state[findUser]));
      }
      localStorage.setItem("user-list", JSON.stringify(state));
    },
    updateAddress: (state, action) => {
      const userLogin = JSON.parse(localStorage.getItem("user-login"));
      const newUser = action.payload;
      const findUser = state.findIndex((x) => x.id === userLogin.id);
      if (findUser >= 0) {
        state[findUser].address = newUser.address;
        localStorage.removeItem("user-list");
        localStorage.setItem("user-login", JSON.stringify(state[findUser]));
      }
      localStorage.setItem("user-list", JSON.stringify(state));
    },
    updatePassword: (state, action) => {
      const userLogin = JSON.parse(localStorage.getItem("user-login"));
      const newUser = action.payload;
      const findUser = state.findIndex((x) => x.id === userLogin.id);
      if (findUser >= 0) {
        state[findUser].password = newUser;
        localStorage.removeItem("user-list");
        localStorage.setItem("user-login", JSON.stringify(state[findUser]));
      }
      localStorage.setItem("user-list", JSON.stringify(state));
    },
  },
});

const { reducer, actions } = userSlice;
export const {
  addNew,
  login,
  logout,
  updateFirstName,
  updateLastName,
  updateEmail,
  updatePhone,
  updateAddress,
  updatePassword,
} = actions;
export default reducer;
