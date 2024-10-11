import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    id: "",
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.id = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.id = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalState = (state) => state.modalState;
