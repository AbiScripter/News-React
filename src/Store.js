import { configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "./Slices/ArticleSlice";
import NextPageSlice from "./Slices/NextPageSlice";

const store = configureStore({
  reducer: {
    articles: ArticleSlice,
    nextPage: NextPageSlice,
  },
});

export default store;
