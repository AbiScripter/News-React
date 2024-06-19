import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nextPageId: "",
};

const NextPageSlice = createSlice({
  name: "nextPageId",
  initialState: initialState,
  reducers: {
    updateNextPageId: (state, action) => {
      state.nextPageId = action.payload;
    },
  },
});

export const { updateNextPageId } = NextPageSlice.actions;
export default NextPageSlice.reducer;
