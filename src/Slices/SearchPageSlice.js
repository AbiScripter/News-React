import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchNextPageId: "",
};

const SearchPageSlice = createSlice({
  name: "searchNextPageId",
  initialState: initialState,
  reducers: {
    updateSearchNextPageId: (state, action) => {
      state.searchNextPageId = action.payload;
    },
  },
});

export const { updateSearchNextPageId } = SearchPageSlice.actions;
export default SearchPageSlice.reducer;
