import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
   name: "category",
   initialState: {
    categories: [],
   },
   reducers: {
      setCategories(state, action) {
        state.categories = action.payload;
      },
      addCategory(state, action) {
         state.categories.push(action.payload);
      },
      deleteCategory(state, action) {
         state.categories = state.categories.filter(c => c._id !== action.payload);
      },
   }
});

const categoryReducer = categorySlice.reducer;
const categoryActions = categorySlice.actions;

export { categoryActions, categoryReducer }