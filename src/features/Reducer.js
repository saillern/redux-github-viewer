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
console.log(openMenuState);
console.log(activeMenuBar.actions.handleMenuBar());

console.log(handleMenuBar());

const newState = activeMenuBar.reducer(
  { value: false },
  activeMenuBar.actions.handleMenuBar(),
);
console.log(newState);

export default activeMenuBar.reducer;
