import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./accountSlice";

const appStore = configureStore({
  reducer: {
    accountSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default appStore;
