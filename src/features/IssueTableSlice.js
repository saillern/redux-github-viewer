import { createSlice } from "@reduxjs/toolkit";

const issueInfo = [
  {
    title: "A bug in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
  {
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "",
    created: "06-02-2024",
    updated: "06-02-2024",
  },
  {
    title: "fix layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
