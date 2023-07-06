import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
   name: "comment",
   initialState: {
      comments: [],
   },
   reducers: {
     setComments(state,action) {
      state.comments = action.payload;
     },
     deleteComment(state,action) {
      state.comments = state.comments.filter(c => c._id !== action.payload);
     }
   }
});

const commentReducer = commentSlice.reducer;
const commentActions = commentSlice.actions;

export { commentActions, commentReducer }