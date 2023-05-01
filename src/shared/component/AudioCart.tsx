import React from "react"
import play from "../icon/AudioCart/play.svg"
import download from "../icon/AudioCart/download.svg"

interface AudioCartProps {
  time: number
}

export function AudioCart({ time }: AudioCartProps) {
  return (
    <div className="w-[352px] h-[48px] rounded-[48px] bg-[#EAF0FA] flex justify-center items-center">
      <span className="text-[#122945] text-[14px] mr-3">{time}</span>
      <img src={play} alt="" className="mr-2" />
      <div className="w-[164px] h-[4px] bg-[#ADBFDF] mr-[18px]" />
      <img src={download} alt="" />
    </div>
  )
}
