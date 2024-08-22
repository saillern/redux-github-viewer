import { configureStore } from "@reduxjs/toolkit";
import { activeMenuBar } from "./Reducer";
import { issueSlice } from "./IssueSlice";
import { modalSlice } from "./ModalSlice";

export const store = configureStore({
  reducer: {
    //TODO:ローカルステートにする
    menuState: activeMenuBar.reducer,
    issue: issueSlice.reducer,
    modalState: modalSlice.reducer,
  },
});
