import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: "",
  },
  reducers: {
    getAddress: (state, action) => {
      state.address = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { getAddress, setAddress } = addressSlice.actions;
export default addressSlice.reducer;
