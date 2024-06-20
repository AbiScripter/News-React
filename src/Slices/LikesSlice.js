import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: JSON.parse(localStorage.getItem("likes")) || [],
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
      localStorage.setItem("likes", JSON.stringify(state.likes));
    },
  },
});

export const { addToLiked } = LikeSlice.actions;
export default LikeSlice.reducer;
