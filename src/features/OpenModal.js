import { createSlice } from "@reduxjs/toolkit";

export const modalAction = createSlice({
  name: "modal",
  initialState: {
    show: false,
  },
  reducers: {
    openModal: (state) => {
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false;
    },
  },
});

export const { openModal, closeModal } = modalAction.actions;
export const modalState = (state) => state.modalState.show;
