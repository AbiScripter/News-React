import { configureStore } from "@reduxjs/toolkit";
import ArticleSlice from "./ArticleSlice";
import NextPageSlice from "./NextPageSlice";
import SearchSlice from "./SearchSlice";
import SearchPageSlice from "./SearchPageSlice";
import SearchQuerySlice from "./SearchQuerySlice";
import LikesSlice from "./LikesSlice";

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
