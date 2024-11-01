import { configureStore } from "@reduxjs/toolkit";
import { issueSlice } from "./issueSlice";
import { modalSlice } from "./modalSlice";

export const store = configureStore({
  reducer: {
    issue: issueSlice.reducer,
    modalState: modalSlice.reducer,
  },
});
