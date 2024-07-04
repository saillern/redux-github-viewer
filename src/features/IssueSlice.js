import { createSlice } from "@reduxjs/toolkit";

const issueInit = {
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

export const issueSlice = createSlice({
  name: "issue",
  initialState: issueInit,
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

export const { addIssue } = issueSlice.actions;
export const Issue = (state) => state.issue;
export default issueSlice.reducer;
