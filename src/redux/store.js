import { configureStore } from "@reduxjs/toolkit";
import allPrices from "./actions";

export const store = configureStore({
  reducer: allPrices,
});
