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
    },
  },
})

export const { setCalls } = callTableSlice.actions

export const selectCalls = (state: RootState) => state.callTable.calls

export default callTableSlice.reducer
