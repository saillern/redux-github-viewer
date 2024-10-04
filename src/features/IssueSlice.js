import { createSlice } from "@reduxjs/toolkit";
import { getDate } from "../utils/date";

const issueInit = [
  {
    uuid: crypto.randomUUID(),
    title: "A bug in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    author: "",
    createBy: getDate(),
  },
  {
    uuid: crypto.randomUUID(),
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    author: "",
    createBy: getDate(),
  },
  {
    uuid: crypto.randomUUID(),
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
    deleteIssue: {
      reducer: (state, action) => {
        return state.filter((issue) => issue.uuid != action.payload);
      },
    },
    editIssue: {
      reducer: (state, action) => {
        return state.map((issue) =>
          issue.uuid === action.payload.uuid
            ? {
                uuid: action.payload.uuid,
                title: action.payload.title,
                description: action.payload.description,
                status: action.payload.status,
                author: action.payload.author,
                createBy: action.payload.createBy,
              }
            : issue,
        );
      },
    },
  },
});

export const { addIssue, deleteIssue, editIssue } = issueSlice.actions;
export const issues = (state) => state.issue;
export default issueSlice.reducer;
