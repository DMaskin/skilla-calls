import React, { useEffect } from "react"
import { fetchCalls } from "./callTableAPI"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectCalls, setCalls } from "./callTableSlice"
import incoming from "../../shared/icon/CallTable/incoming.svg"
import outgoing from "../../shared/icon/CallTable/outgoing.svg"
import { ICall } from "../../model/ICall"

const headers = ["Тип", "Время", "Сотрудник", "Звонок", "Источник", "Оценка", "Длительность"]

export function CallTable() {
  const dispatch = useAppDispatch()
  const calls = useAppSelector(selectCalls)

  // eslint-disable-next-line
  useEffect(() => {
    fetchCalls()
      .then((calls) => dispatch(setCalls(calls)))
      .catch((e) => console.log(e.message))
  }, [])

  return (
    <div className="bg-white h-[calc(100%-64px-75px-80px)] ml-[120px] mr-[120px] mt-[75px] rounded-[8px] shadow-small overflow-y-scroll">
      <div className="ml-[40px] h-[61px] border-b-[1px] border-b-solid border-b-[#EAF0FA] text-textHeader text-[14px] callsTable">
        {headers.map((title, idx) => (
          <div
            key={idx}
            className={
              idx === headers.length - 1
                ? "h-full w-full flex items-center justify-end"
                : "h-full w-full flex items-center justify-start "
            }
          >
            <span className={idx === headers.length - 1 ? "mr-[40px]" : ""}>{title}</span>
          </div>
        ))}
      </div>
      {calls.map((call: ICall) => (
        <div
          key={call.id}
          className="ml-[40px] h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] callsTable"
        >
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
              {/*<Eval title="Отлично" />*/}
              {/*<Eval title="Хорошо" />*/}
              {/*<Eval title="Плохо" />*/}
            </span>
          </div>
          <div className="h-full w-full flex justify-end items-center">
            <span className="mr-[40px]">{call.time}</span>
          </div>
        </div>
      ))}

      {/*<div className="ml-[40px] h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] callsTable">*/}
      {/*<div>*/}
      {/*  <span className="h-full w-full flex justify-start items-center">*/}
      {/*    <img src={blueArrow} alt="" />*/}
      {/*  </span>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <span className="h-full w-full  flex justify-start items-center">19:00</span>*/}
      {/*</div>*/}
      {/*<div className="h-full w-full  flex justify-start items-center">*/}
      {/*  <span>*/}
      {/*    <img src={avatar} alt="" />*/}
      {/*  </span>*/}
      {/*</div>*/}
      {/*<div className="h-full w-full  flex justify-start items-center">*/}
      {/*  <div>+7 (987) 567-17-12</div>*/}
      {/*</div>*/}
      {/*<div className="h-full w-full flex justify-start items-center">*/}
      {/*  <span className="text-[#5E7793]">Rabota.ru</span>*/}
      {/*</div>*/}
      {/*<div className="h-full w-full flex justify-start items-center">*/}
      {/*  <span>*/}
      {/*    <Eval title="Отлично" />*/}
      {/*    <Eval title="Хорошо" />*/}
      {/*    <Eval title="Плохо" />*/}
      {/*  </span>*/}
      {/*</div>*/}
      {/*<div className="h-full w-full flex justify-end items-center">*/}
      {/*  <span className="mr-[40px]">12:06</span>*/}
      {/*</div>*/}
      {/*</div>*/}
    </div>
  )
}
