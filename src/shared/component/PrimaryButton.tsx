import React from "react"

interface PrimaryButtonProps {
  title: string
  svg?: string
}

export function PrimaryButton({ svg, title }: PrimaryButtonProps) {
  return (
    <button className="w-[200px] h-[52px] bg-[#274BC8] hover:bg-[#0024CB] active:bg-[#002CFB] text-[16px] text-white rounded-[4px] flex flex-row items-center justify-around px-[24px]">
      {title}
      {svg && <img src={svg} alt="" />}
    </button>
  )
}
