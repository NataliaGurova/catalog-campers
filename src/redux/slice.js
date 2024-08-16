import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations.js";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export const advertsReducer = advertsSlice.reducer;