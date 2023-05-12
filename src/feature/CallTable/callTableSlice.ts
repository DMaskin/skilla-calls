import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICall } from "../../model/ICall"
import { RootState } from "../../app/store"
import { getRandomStatus } from "../../shared/lib/utils"

export interface CallTableState {
  calls: ICall[]
  unfilteredCalls: ICall[]
  filterObj: Record<string, unknown>
}

type FilterType = {
  in_out?: boolean
  source?: string
  person_name?: string,
  error: string,
}

const initialState: CallTableState = {
  calls: [] as ICall[],
  unfilteredCalls: [] as ICall[],
  filterObj: {} as FilterType,
}

export const callTableSlice = createSlice({
  name: "callTable",
  initialState,
  reducers: {
    setCalls: (state, action: PayloadAction<ICall[]>) => {
      state.calls = action.payload.map((call) => {
        if (call.errors.length) {
          const error = call.errors[0]
          return {...call, error}
        }
        else if (call.time > 0) {
          return { ...call, evalStatus: getRandomStatus() }
        }
        return {...call}
        // return call.time > 0 && !call.errors.length ? { ...call, evalStatus: getRandomStatus() } : { ...call }
      })
      // mock data
      state.calls[1] = { ...state.calls[1], person_name: "Константик К." }
      state.calls[3] = { ...state.calls[3], source: "Yandex.ru" }
      state.calls[4] = { ...state.calls[4], person_name: "Полина З." }
      state.calls[5] = { ...state.calls[5], source: "Rambler.ru" }
      state.unfilteredCalls = state.calls
    },
    filterByCallType: (state, action: PayloadAction<boolean>) => {
      state.filterObj.in_out = action.payload ? 1 : 0
      callTableSlice.caseReducers.defaultFilter(state)
    },
    filterBySource: (state, action: PayloadAction<string>) => {
      state.filterObj.source = action.payload
      callTableSlice.caseReducers.defaultFilter(state)
    },
    filterByEmployee: (state, action: PayloadAction<string>) => {
      state.filterObj.person_name = action.payload
      callTableSlice.caseReducers.defaultFilter(state)
    },
    filterByEval: (state, action: PayloadAction<string>) => {
      // console.log(action.payload)
      // if (action.payload === "Скрипт не распознан")
      state.filterObj.evalStatus = action.payload
      callTableSlice.caseReducers.defaultFilter(state)
    },
    filterByErrors: (state, action: PayloadAction<string>) => {
      state.filterObj.error = action.payload
      callTableSlice.caseReducers.defaultFilter(state)
    },
    defaultFilter: (state) => {
      let filteredList = [...state.calls]
      Object.keys(state.filterObj).forEach((field) => {
        filteredList = [...filteredList.filter((call) => call[field as keyof FilterType] === state.filterObj[field])]
      })
      state.calls = [...filteredList]
    },
    deleteFilter: (state, action: PayloadAction<string>) => {
      let field
      switch (action.payload) {
        case "Все типы":
          field = "in_out"
          break
        case "Все источники":
          field = "source"
          break
        case "Все сотрудники":
          field = "person_name"
          break
        case "Все оценки":
          field = "evalStatus"
          break
        case "Скрипт не использован":
          field = "error"
          break
        default:
          field = ""
      }
      delete state.filterObj[field]
      console.log(Object.keys(state.filterObj))
      console.log(Object.values(state.filterObj))
      state.calls = state.unfilteredCalls
      callTableSlice.caseReducers.defaultFilter(state)
    },
  },
})

export const { setCalls, filterByCallType, filterBySource, deleteFilter, filterByEmployee, filterByEval, filterByErrors } = callTableSlice.actions

export const selectCalls = (state: RootState) => state.callTable.calls

export default callTableSlice.reducer
