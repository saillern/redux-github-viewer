import { configureStore } from "@reduxjs/toolkit";
import { activeMenuBar } from "./Reducer";

export const store = configureStore({
  reducer: {
    menuState: activeMenuBar.reducer,
  },
});
