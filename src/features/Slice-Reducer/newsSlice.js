import { createSlice } from "@reduxjs/toolkit";
import { newsData } from "../Data/newsData";
const data = JSON.parse(localStorage.getItem("news-list"));

const newsSlice = createSlice({
  name: "news",
  initialState: data ? data : newsData,
  reducers: {
    postNews: (state, action) => {
      return state;
    },
    clickViewNews: (state, action) => {
      const news = action.payload;
      const findIndex = state.findIndex((x) => x.id === news.id);
      if (findIndex >= 0) {
        state[findIndex].views += 1;
      }
      localStorage.setItem("news-list", JSON.stringify(state));
    },
  },
});

const { reducer, actions } = newsSlice;
export const { postNews, clickViewNews } = actions;
export default reducer;
