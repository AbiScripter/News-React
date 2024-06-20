import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchArticles: [],
};

const searchArticlesSlice = createSlice({
  name: "searchArticles",
  initialState: initialState,
  reducers: {
    addSearchArticles: (state, action) => {
      console.log(action.payload);
      state.searchArticles = [...state.searchArticles, ...action.payload];
    },
    getNewSearchArticles: (state, action) => {
      console.log(action.payload);
      state.searchArticles = action.payload;
    },
  },
});

export const { addSearchArticles, getNewSearchArticles } =
  searchArticlesSlice.actions;
export default searchArticlesSlice.reducer;
