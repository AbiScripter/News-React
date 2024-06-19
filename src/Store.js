import { configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "./Slices/ArticleSlice";

const store = configureStore({
  reducer: {
    articles: ArticleSlice,
  },
});

export default store;
