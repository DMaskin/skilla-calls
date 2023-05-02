import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { CheckBox } from "../../shared/component/CheckBox"
import { selectCalls, setCalls } from "./callTableSlice"
import { fetchCalls } from "./callTableAPI"
import { ICall } from "../../model/ICall"
import { Call } from "./Call"
import "./CallTable.css"

export function CallTable() {
  const [checkBoxVisible, setCheckBoxVisible] = useState(false)
  const calls = useAppSelector(selectCalls)
  const dispatch = useAppDispatch()
  const checkBox = <div className="ml-3 flex justify-center items-center">{checkBoxVisible && <CheckBox />}</div>
  const headers = [checkBox, "Тип", "Время", "Сотрудник", "", "Звонок", "Источник", "Оценка", "Длительность"]

  // eslint-disable-next-line
  useEffect(() => {
    fetchCalls()
      .then((calls) => dispatch(setCalls(calls)))
      .catch((e) => console.log(e.message))
  }, [])

  function mouseEnterHandler() {
    setCheckBoxVisible(true)
  }

  function mouseLeaveHandler() {
    setCheckBoxVisible(false)
  }

  return (
    <div className="bg-white h-[calc(100%-64px-75px-80px)] ml-[120px] mr-[120px] mt-[20px] rounded-[8px] shadow-small overflow-y-scroll scrollable">
      <div className="h-[61px] border-b-[1px] border-b-solid border-b-[#EAF0FA] text-textHeader text-[14px] callsTable">
        {headers.map((title, idx) => (
          <div
            key={idx}
            className={
              idx === headers.length - 1
                ? "h-full w-full flex items-center justify-end"
                : "h-full w-full flex items-center justify-start"
            }
          >
            <span className={idx === headers.length - 1 ? "mr-[40px]" : ""}>{title}</span>
          </div>
        ))}
      </div>
      <div onMouseLeave={mouseLeaveHandler} onMouseEnter={mouseEnterHandler}>
        {calls.map((call: ICall, idx) => (
          <React.Fragment key={idx}>
            <Call call={call} />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
