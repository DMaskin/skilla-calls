import { configureStore } from "@reduxjs/toolkit"
import callTableReducer from "../feature/CallTable/callTableSlice"

export const store = configureStore({
  reducer: { callTable: callTableReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
