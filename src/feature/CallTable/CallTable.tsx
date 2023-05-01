import React, { useEffect, useState } from "react"
import { fetchCalls } from "./callTableAPI"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectCalls, setCalls } from "./callTableSlice"
import { ICall } from "../../model/ICall"
import { AudioCart } from "../../shared/component/AudioCart"
import { CheckBox } from "../../shared/component/CheckBox"
import incoming from "../../shared/icon/CallTable/incoming.svg"
import outgoing from "../../shared/icon/CallTable/outgoing.svg"
import phone from "../../shared/icon/CallTable/phone.svg"
import "./CallTable.css"

export function CallTable() {
  const dispatch = useAppDispatch()
  const calls = useAppSelector(selectCalls)
  const [visible, setVisible] = useState(-1)
  const checkBox = <div className="ml-3 flex justify-center items-center">{visible >= 0 && <CheckBox />}</div>

  const headers = [checkBox, "Тип", "Время", "Сотрудник", "", "Звонок", "Источник", "Оценка", "Длительность"]

  // eslint-disable-next-line
  useEffect(() => {
    fetchCalls()
      .then((calls) => dispatch(setCalls(calls)))
      .catch((e) => console.log(e.message))
  }, [])

  function mouseOverHandler(index: number) {
    setVisible(index)
  }

  function mouseOutHandler() {
    setVisible(-1)
  }

  return (
    <div
      className="bg-white h-[calc(100%-64px-75px-80px)] ml-[120px] mr-[120px] mt-[75px] rounded-[8px] shadow-small overflow-y-scroll scrollable"
      onMouseOut={mouseOutHandler}
    >
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
            <span className={idx === headers.length - 1 ? "mr-[40px]" : ""}>
              {title}
            </span>
          </div>
        ))}
      </div>
      {calls.map((call: ICall, idx) => (
        <div
          key={call.id}
          className={
            visible === idx
              ? "h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] cursor-pointer callsTable bg-[rgba(212,223,243,0.17)]"
              : "h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] cursor-pointer callsTable"
          }
          onMouseOver={() => mouseOverHandler(idx)}
        >
          <div className="h-full w-full flex justify-start items-center ml-3">
            {visible === idx ? <CheckBox /> : null}
          </div>
          <div>
            <span className="h-full w-full flex justify-start items-center">
              <img src={call.in_out ? incoming : outgoing} alt="" />
            </span>
          </div>
          <div>
            <span className="h-full w-full flex justify-start items-center">{call.date.substring(10, 16)}</span>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>
              <img width={32} height={32} src={call.person_avatar} alt="" />
            </span>
          </div>
          <div className="flex items-center justify-end mr-[6px]">
            {visible === idx && <img src={phone} alt=""/>}
          </div>
          <div className="h-full w-full  flex justify-start items-center">
            <div>{call.from_number}</div>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span className="text-[#5E7793]">{call.contact_company}</span>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>
              {call.errors.map((title, idx) => (
                <div key={idx} className="text-[#EA1A4F]">
                  {title}
                </div>
              ))}
            </span>
          </div>
          <div className="h-full w-full flex justify-end items-center">
            <span className="mr-[40px]">
              {call.time ? <AudioCart time={call.time} /> : call.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
