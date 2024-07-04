import { configureStore } from "@reduxjs/toolkit";
import { activeMenuBar } from "./Reducer";
import { issueSlice } from "./IssueSlice";
import { modalSlice } from "./ModalSlice";

export const store = configureStore({
  reducer: {
    menuState: activeMenuBar.reducer, //(修正)ローカルステートにする
    issue: issueSlice.reducer,
    modalState: modalSlice.reducer,
  },
});
