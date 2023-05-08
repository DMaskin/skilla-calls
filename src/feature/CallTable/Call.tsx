import React from "react"
import { ICall } from "../../model/ICall"
import { Eval, EvalType } from "../../shared/component/Eval"
import { AudioCart } from "../../shared/component/AudioCart"
import { makeTimeFormat } from "../../shared/lib/utils"
import phone from "../../shared/icon/CallTable/phone.svg"
import outgoing from "../../shared/icon/CallTable/outgoing.svg"
import incoming from "../../shared/icon/CallTable/incoming.svg"

export function Call({ call }: { call: ICall }) {
  return (
    <div
      key={call.id}
      className="h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] cursor-pointer callsTable hover:bg-[rgba(212,223,243,0.17)] group call"
    >
      <div className="opacity-0 group-hover:opacity-100 h-full w-full flex justify-start items-center ml-3">
        <input type="checkbox" className="w-4 h-4 border-[2px] border-[#ADBFDF] invisible group-hover/calls:visible" />
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
      <div className="opacity-0 group-hover:opacity-100 flex items-center justify-end mr-[6px]">
        <img src={phone} alt="" />
      </div>
      <div className="h-full w-full  flex justify-start items-center">
        <div>{call.in_out ? call.from_number : call.to_number}</div>
      </div>
      <div className="h-full w-full flex justify-start items-center">
        <span className="text-[#5E7793]">{call.source}</span>
      </div>
      <div className="h-full w-full flex justify-start items-center">
        <span>
          {call.errors.length ? (
            call.errors.map((title, idx) => (
              <div key={idx} className="text-[#EA1A4F]">
                {title}
              </div>
            ))
          ) : ((call as any).evalStatus &&
            <Eval title={(call as any).evalStatus as EvalType} />
          )}
        </span>
      </div>
      <div className="h-full w-full flex justify-end items-center">
        <span className="mr-[40px]">
          {call.time > 0 && (
            <>
              <AudioCart time={makeTimeFormat(call.time)} id={call.record} />
              <div className="group-hover-[.call]:hidden">{makeTimeFormat(call.time)}</div>
            </>
          )}
        </span>
      </div>
    </div>
  )
}
