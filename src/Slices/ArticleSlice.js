import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const ArticleSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    addArticles: (state, action) => {
      state.articles = [...state.articles, ...action.payload];
    },
  },
});

export const { addArticles } = ArticleSlice.actions;
export default ArticleSlice.reducer;
