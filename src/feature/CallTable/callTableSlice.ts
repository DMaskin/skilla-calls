import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICall } from "../../model/ICall"
import { RootState } from "../../app/store"
import { getRandomStatus } from "../../shared/lib/utils"

export interface CallTableState {
  calls: ICall[]
}

const initialState: CallTableState = {
  calls: [] as ICall[],
}

export const callTableSlice = createSlice({
  name: "callTable",
  initialState,
  reducers: {
    setCalls: (state, action: PayloadAction<ICall[]>) => {
      state.calls = action.payload.map((call) => {
        return { ...call, evalStatus: getRandomStatus() }
      })
      state.calls[3] = {...state.calls[3], source: "Yandex.ru"}
      state.calls[5] = {...state.calls[3], source: "Rambler.ru"}
    },
    filterByCallType: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      state.calls = [...state.calls.filter((call) => call.in_out != action.payload)]
      console.log(state.calls)
    },
    filterBySource: (state, action: PayloadAction<string>) => {
      state.calls = [...state.calls.filter((call) => call.source === action.payload)]
    }
  },
})

export const { setCalls, filterByCallType, filterBySource } = callTableSlice.actions

export const selectCalls = (state: RootState) => state.callTable.calls

export default callTableSlice.reducer
