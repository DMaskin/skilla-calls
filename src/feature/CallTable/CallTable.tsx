import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectCalls, setCalls } from "./callTableSlice"
import { fetchCalls } from "./callTableAPI"
import { ICall } from "../../model/ICall"
import { Call } from "./Call"
import "./CallTable.css"

export function CallTable() {
  const calls = useAppSelector(selectCalls)
  const dispatch = useAppDispatch()
  const headers = ["Тип", "Время", "Сотрудник", "", "Звонок", "Источник", "Оценка", "Длительность"]

  // eslint-disable-next-line
  useEffect(() => {
    fetchCalls()
      .then((calls) => dispatch(setCalls(calls)))
      .catch((e) => console.log(e.message))
  }, [])

  return (
    <div className="bg-white h-[calc(100%-64px-75px-80px)] ml-[120px] mr-[120px] rounded-[8px] shadow-small overflow-y-scroll scrollable group/calls">
      <div className="h-[61px] border-b-[1px] border-b-solid border-b-[#EAF0FA] text-textHeader text-[14px] callsTable">
        <div className="ml-3 h-full w-full flex justify-start items-center">
          <input
            type="checkbox"
            className="w-4 h-4 border-[2px] border-[#ADBFDF] invisible group-hover/calls:visible"
          />
        </div>
        {headers.map((title, idx) => (
          <div key={idx} className={"h-full w-full flex items-center justify-start last:justify-end"}>
            <span className="last:mr-[40px]">{title}</span>
          </div>
        ))}
      </div>
      {calls.map((call: ICall, idx) => (
        <React.Fragment key={idx}>
          <Call call={call} />
        </React.Fragment>
      ))}
    </div>
  )
}
