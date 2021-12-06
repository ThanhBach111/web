import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "accountSlice",
  initialState: {
    token: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const accountSliceAction = accountSlice.actions;

export default accountSlice.reducer;
