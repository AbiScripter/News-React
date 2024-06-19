import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: [],
};

const LikeSlice = createSlice({
  name: "likes",
  initialState: initialState,
  reducers: {
    addToLiked: (state, action) => {
      let { id } = action.payload;
      let updated = [];
      if (state.likes.includes(id)) {
        updated = state.likes.filter((l) => l !== id);
      } else {
        updated = [...state.likes, id];
      }
      state.likes = updated;
    },
  },
});

export const { addToLiked } = LikeSlice.actions;
export default LikeSlice.reducer;
