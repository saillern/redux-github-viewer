import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    issue: "",
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.issue = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.issue = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalState = (state) => state.modalState;
