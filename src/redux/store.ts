import { configureStore } from "@reduxjs/toolkit";
import  MessagesSlice  from "./slices/MessageSlice";

export const store = configureStore({
  reducer: {
    message: MessagesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;