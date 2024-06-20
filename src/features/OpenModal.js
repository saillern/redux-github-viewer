import { createSlice } from "@reduxjs/toolkit";

export const modalAction = createSlice({
  name: "modal",
  initialState: {
    value: false,
  },
  reducers: {
    openModal: (state) => {
      state.value = true;
    },
    closeModal: (state) => {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = modalAction.actions;
export const modalState = (state) => state.modalState.value;
