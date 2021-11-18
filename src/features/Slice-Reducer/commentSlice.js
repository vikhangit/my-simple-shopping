import { createSlice } from "@reduxjs/toolkit";
import { commentData } from "../Data/commentData";
const data = JSON.parse(localStorage.getItem("comment"));

const initialState = data ? data : commentData;

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    addRating: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("rating", JSON.stringify(action.payload));
    },
    addNewComment: (state, action) => {
      const rate = JSON.parse(localStorage.getItem("rating"));
      const comment = action.payload;
      state.push({
        ...comment,
        rating: rate,
      });
      localStorage.setItem("comment", JSON.stringify(state));
      localStorage.removeItem("rating");
    },
  },
});

const { reducer, actions } = commentSlice;
export const { addRating, addNewComment } = actions;
export default reducer;
