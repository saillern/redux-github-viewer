import { createSlice } from "@reduxjs/toolkit";
import { getDate } from "../utils/date";

const issueInit = [
  {
    id: crypto.randomUUID(),
    title: "A bug in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "",
    createBy: getDate(),
  },
  {
    id: crypto.randomUUID(),
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    author: "",
    createBy: getDate(),
  },
  {
    id: crypto.randomUUID(),
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
        action.payload.id = crypto.randomUUID();
        state.push({
          id: crypto.randomUUID(),
          ...action.payload,
        });
      },
    },
    deleteIssue: {
      reducer: (state, action) => {
        state = state.fitler((issue) => issue.id != action.payload);
      },
    },
    editIssue: {
      reducer: (state, action) => {
        const index = state.findIndex((obj) => {
          return obj.id === action.payload.id;
        });
        if (index === -1) return;
        state[index] = action.payload;
      },
    },
  },
});

export const { addIssue, deleteIssue, editIssue } = issueSlice.actions;
export const issues = (state) => state.issue;
export default issueSlice.reducer;
