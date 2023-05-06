import React from "react"
import great from "../icon/Eval/3dot.svg"
import good from "../icon/Eval/2dot.svg"
import bad from "../icon/Eval/dot.svg"

export type EvalType = "Отлично" | "Хорошо" | "Плохо"

export function Eval({ title }: { title: EvalType }) {
  let icon, className
  switch (title) {
    case "Отлично":
      className = "w-[70px] bg-[#DBF8EF] text-[#00A775] border-[#28A879]"
      icon = great
      break
    case "Хорошо":
      className = "w-[66px] bg-[#D8E4FB] text-[#122945] border-[#ADBFDF]"
      icon = good
      break
    default:
      className = "w-[55px] bg-[#FEE9EF] text-[#EA1A4F] border-[#EA1A4F]"
      icon = bad
  }

  return (
    <div className="flex gap-2">
      <img src={icon} alt="" />
      <div className={className + " flex items-center justify-center text-[14px] border-[1px] h-[26px] rounded-[4px]"}>
        {title}
      </div>
    </div>
  )
}
