import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "accountSlice",
  initialState: {
    token: null,
    userInfo: {},
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const accountSliceAction = accountSlice.actions;

export default accountSlice.reducer;
