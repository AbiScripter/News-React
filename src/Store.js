import { configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "./Slices/ArticleSlice";
import NextPageSlice from "./Slices/NextPageSlice";
import SearchSlice from "./Slices/SearchSlice";
import SearchPageSlice from "./Slices/SearchPageSlice";
import SearchQuerySlice from "./Slices/SearchQuerySlice";
import LikesSlice from "./Slices/LikesSlice";

const store = configureStore({
  reducer: {
    articles: ArticleSlice,
    nextPage: NextPageSlice,
    searchArticles: SearchSlice,
    searchNextPage: SearchPageSlice,
    searchQuery: SearchQuerySlice,
    likes: LikesSlice,
  },
});

export default store;
