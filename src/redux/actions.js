import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offer12Months: { total: 99, monthly: 8 },
  recommended12Months: { total: 179, monthly: 15 },
  subscription6Months: { total: 149, monthly: 25 },
  subscription3Months: { total: 99, monthly: 33 },
  totalPrice: 0,
};

export const counterSlice = createSlice({
  name: "program-cost",
  initialState,
  reducers: {
    calculateTotal: (state, action) => {
      console.log("action", typeof action.payload);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      let total = action.payload + action.payload * 0.18;
      state.totalPrice = total;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calculateTotal } = counterSlice.actions;

export default counterSlice.reducer;
