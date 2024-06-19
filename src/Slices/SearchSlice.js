import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchArticles: [],
};

const searchArticlesSlice = createSlice({
  name: "searchArticles",
  initialState: initialState,
  reducers: {
    addSearchArticles: (state, action) => {
      state.searchArticles = [...state.searchArticles, ...action.payload];
    },
  },
});

export const { addSearchArticles } = searchArticlesSlice.actions;
export default searchArticlesSlice.reducer;
