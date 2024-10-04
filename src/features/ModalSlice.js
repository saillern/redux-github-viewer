import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
    id: 0,
  },
  reducers: {
    openModal: (state, action) => {
      state.show = [true, action.payload];
    },
    closeModal: (state) => {
      state.show = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalState = (state) => state.modalState.show;
