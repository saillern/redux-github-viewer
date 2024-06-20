import { createSlice } from "@reduxjs/toolkit";

const issueInfo = {
  index: 3,
  data: {
    1: {
      id: 0,
      title: "A bug in Top Page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: 1,
      author: "",
      createBy: "06-02-2024",
    },
    2: {
      id: 1,
      title: "A problem of performance in Top Page",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: 0,
      author: "",
      createBy: "06-02-2024",
    },
    3: {
      id: 2,
      title: "fix layout",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: 0,
      author: "",
      createBy: "06-02-2024",
    },
  },
};

export const issueListSlice = createSlice({
  name: "issue",
  initialState: issueInfo,
  reducers: {
    addIssue: {
      reducer: (state, action) => {
        const addIssue = action.payload.data;
        state.index += 1;
        state.data = Object.assign(state.data, addIssue);
      },
    },
  },
});

export const { addIssue } = issueListSlice.actions;
export const updateIssueInfo = (state) => state.issue;
export default issueListSlice.reducer;
