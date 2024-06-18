import { configureStore } from "@reduxjs/toolkit";
import { activeMenuBar } from "./Reducer";
import { issueListSlice } from "./IssueTableSlice";

export const store = configureStore({
  reducer: {
    menuState: activeMenuBar.reducer,
    issues: issueListSlice.reducer,
  },
});
