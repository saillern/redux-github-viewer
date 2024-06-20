import { createSlice } from "@reduxjs/toolkit";

const issueInfo = [
  {
    id: 0,
    title: "A bug in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: 0,
    author: "",
    created: "06-02-2024",
  },
  {
    id: 1,
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: 0,
    author: "",
    created: "06-02-2024",
  },
  {
    id: 2,
    title: "fix layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: 0,
    author: "",
    created: "06-02-2024",
  },
];

export const issueListSlice = createSlice({
  name: "issue",
  initialState: issueInfo,
  reducers: {
    addIssue: {
      reducer: (state, action) => {
        const issues = action.payload;
        state.push(issues);
      },
    },
  },
});

export const { addIssue } = issueListSlice.actions;
export const updateIssueInfo = (state) => state.issues;
export default issueListSlice.reducer;
