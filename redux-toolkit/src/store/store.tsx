import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export type ReduxState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
