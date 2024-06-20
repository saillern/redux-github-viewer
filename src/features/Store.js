import { configureStore } from "@reduxjs/toolkit";
import { activeMenuBar } from "./Reducer";
import { issueListSlice } from "./IssueTableSlice";
import { modalAction } from "./OpenModal";

export const store = configureStore({
  reducer: {
    menuState: activeMenuBar.reducer,
    issues: issueListSlice.reducer,
    modalState: modalAction.reducer,
  },
});
