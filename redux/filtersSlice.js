
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sort: "price",
  category: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSort: (state, action) => { state.sort = action.payload; },
    setCategory: (state, action) => { state.category = action.payload; },
  },
});

export const { setSort, setCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
