import { createSlice } from "@reduxjs/toolkit";

export const activeMenuBar = createSlice({
  name: "openMenuBar",
  initialState: {
    value: false,
  },
  reducers: {
    handleMenuBar: (state) => {
      state.value = !state.value;
    },
  },
});

export const { handleMenuBar } = activeMenuBar.actions;
export const openMenuState = (state) => state.menuState.value;
export default activeMenuBar.reducer;
