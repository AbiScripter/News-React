import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const SearchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateSearchQuery } = SearchQuerySlice.actions;
export default SearchQuerySlice.reducer;
