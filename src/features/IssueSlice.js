import { createSlice } from "@reduxjs/toolkit";

const issueInit = [
  {
    title: "A bug in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "",
    createBy: "06-02-2024",
  },
  {
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    author: "",
    createBy: "06-02-2024",
  },
  {
    title: "fix layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    author: "",
    createBy: "06-02-2024",
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
