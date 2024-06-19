import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: {
    top: [],
    world: [],
    business: [],
    politics: [],
    technology: [],
    entertainment: [],
    sports: [],
    science: [],
    health: [],
  },
};

const ArticleSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    addArticles: (state, action) => {
      const { category, payload } = action.payload;
      state.articles[category] = [...state.articles[category], ...payload];
    },
  },
});

export const { addArticles } = ArticleSlice.actions;
export default ArticleSlice.reducer;
