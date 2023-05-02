import React from "react"
import add from "../../shared/icon/ProfileInfoGroup/add.svg"
import arrowLeft from "../../shared/icon/ProfileInfoGroup/arrowLeft.svg"
import arrowRight from "../../shared/icon/ProfileInfoGroup/arrowRight.svg"
import calendar from "../../shared/icon/ProfileInfoGroup/calendar.svg"

export function ProfileInfoGroup() {
  return (
    <div className="flex text-[14px] gap-[48px] justify-end items-center mr-[120px] mt-5">
      <div className="w-[145px] h-[40px] bg-white text-[#899CB1] flex items-center justify-center gap-[10px] rounded-[48px]">
        <div>
          <span>Баланс:</span>
          <span className="text-[#122945]"> 272 ₽</span>
        </div>
        <img className="cursor-pointer" src={add} alt="" />
      </div>
      <div className="flex gap-[22px] cursor-pointer">
        <img src={arrowLeft} alt="" />
        <div className="flex gap-2">
          <img src={calendar} alt="" />
          <span className="text-[#005FF8]">3 дня</span>
        </div>
        <img src={arrowRight} alt="" />
      </div>
    </div>
  )
}