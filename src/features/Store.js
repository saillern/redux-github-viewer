import { configureStore } from "@reduxjs/toolkit";
import { issueSlice } from "./IssueSlice";
import { modalSlice } from "./ModalSlice";

export const store = configureStore({
  reducer: {
    issue: issueSlice.reducer,
    modalState: modalSlice.reducer,
  },
});
