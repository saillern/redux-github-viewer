import { createSlice } from "@reduxjs/toolkit";

const issueInfo = [
  {
    text: "A bug in Top Page",
    status: "Open",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
  {
    text: "A problem of performance in Top Page",
    status: "Open",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
  {
    text: "fix layout",
    status: "Close",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
];

export const issueListSlice = createSlice({
  name: "issue",
  initialState: issueInfo,
  reducers: {
    addIssue: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
  },
});

export const { addIssue } = issueListSlice.actions;
export const updateIssueInfo = (state) => state.issues;
export default issueListSlice.reducer;
