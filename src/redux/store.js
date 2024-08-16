import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./slice";

const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
export default store;
