import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations.js";

const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    data: [],
    item: [],
    loading: false,
    error: null,
  },


  reducers: {
    addFavorite: (state, action) => {
      state.item.push(action.payload);
      
    },
    removeFavorite: (state, action) => {
      state.item = state.item.filter(el => el._id !== action.payload);
      
    },
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

export const {
  addFavorite,
  removeFavorite,
} = advertsSlice.actions;

export const advertsReducer = advertsSlice.reducer;
