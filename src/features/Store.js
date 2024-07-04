import { configureStore } from "@reduxjs/toolkit";
import { activeMenuBar } from "./Reducer";
import { issueSlice } from "./IssueSlice";
import { modalAction } from "./OpenModal";

export const store = configureStore({
  reducer: {
    menuState: activeMenuBar.reducer, //(修正)ローカルステートにする
    issue: issueSlice.reducer,
    modalState: modalAction.reducer,
  },
});
