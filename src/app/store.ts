import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import burgerReducer from "../features/burger/burgerSlice";

export const store = configureStore({
  reducer: {
    burger: burgerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
