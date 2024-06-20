import { configureStore } from "@reduxjs/toolkit";
import CategoryPageSlice from "./CategoryPageSlice";
import SearchPageSlice from "./SearchPageSlice";
import LikesSlice from "./LikesSlice";

const store = configureStore({
  reducer: {
    categoryPage: CategoryPageSlice,
    searchPage: SearchPageSlice,
    likes: LikesSlice,
  },
});

export default store;
