import React, { useState } from "react"
import { ICall } from "../../model/ICall"
import { CheckBox } from "../../shared/component/CheckBox"
import { Eval, EvalType } from "../../shared/component/Eval"
import { AudioCart } from "../../shared/component/AudioCart"
import { makeTimeFormat } from "../../shared/lib/utils"
import phone from "../../shared/icon/CallTable/phone.svg"
import outgoing from "../../shared/icon/CallTable/outgoing.svg"
import incoming from "../../shared/icon/CallTable/incoming.svg"

export function Call({ call }: { call: ICall }) {
  const [checkBoxVisible, setCheckBoxVisible] = useState(false)

  function mouseEnterHandler() {
    setCheckBoxVisible(true)
  }

  function mouseLeaveHandler() {
    setCheckBoxVisible(false)
  }

  return (
    <div
      key={call.id}
      className={
        checkBoxVisible
          ? "h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] cursor-pointer callsTable bg-[rgba(212,223,243,0.17)]"
          : "h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] cursor-pointer callsTable"
      }
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="h-full w-full flex justify-start items-center ml-3">{checkBoxVisible ? <CheckBox /> : null}</div>
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
      <div className="flex items-center justify-end mr-[6px]">{checkBoxVisible && <img src={phone} alt="" />}</div>
      <div className="h-full w-full  flex justify-start items-center">
        <div>{call.in_out ? call.from_number : call.to_number}</div>
      </div>
      <div className="h-full w-full flex justify-start items-center">
        <span className="text-[#5E7793]">{call.contact_company}</span>
      </div>
      <div className="h-full w-full flex justify-start items-center">
        <span>
          {call.errors.length ? (
            call.errors.map((title, idx) => (
              <div key={idx} className="text-[#EA1A4F]">
                {title}
              </div>
            ))
          ) : (
            <Eval title={(call as any).evalStatus as EvalType} />
          )}
        </span>
      </div>
      <div className="h-full w-full flex justify-end items-center">
        <span className="mr-[40px]">
          {call.time ? <AudioCart time={makeTimeFormat(call.time)} /> : makeTimeFormat(call.time)}
        </span>
      </div>
    </div>
  )
}
