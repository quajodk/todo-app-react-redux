import { ThunkAction } from "@reduxjs/toolkit";
import { Action, createStore } from "redux";

const store = createStore(reducer);
function reducer(reducer: any) {
  throw new Error("Function not implemented.");
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
