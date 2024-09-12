import { createSlice } from "@reduxjs/toolkit";
import { getDate } from "../utils/date";

const issueInit = [
  {
    title: "A bug in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "",
    createBy: getDate(),
  },
  {
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    author: "",
    createBy: getDate(),
  },
  {
    title: "fix layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    author: "",
    createBy: getDate(),
  },
];

export const issueSlice = createSlice({
  name: "issue",
  initialState: issueInit,
  reducers: {
    addIssue: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
  },
});

export const { addIssue } = issueSlice.actions;
export const issues = (state) => state.issue;
export default issueSlice.reducer;
