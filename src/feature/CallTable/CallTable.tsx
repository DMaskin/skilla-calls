import React from "react"
import avatar from "../../shared/img/CallTable/avatar.png"
import blueArrow from "../../shared/icon/CallTable/blueArrow.svg"

export function CallTable() {
  return (
    <div className="bg-white h-[calc(100%-64px-75px-80px)] ml-[120px] mr-[120px] mt-[75px] rounded-[8px] shadow-small">
      <div>
        <div className="ml-[40px] h-[61px] border-b-[1px] border-b-solid border-b-[#EAF0FA] text-textHeader text-[14px] callsTable">
          <div className="h-full w-full  flex justify-start items-center">
            <span>Тип</span>
          </div>
          <div className="h-full w-full  flex justify-start items-center">
            <span>Время</span>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>Сотрудник</span>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>Звонок</span>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>Источник</span>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>Оценка</span>
          </div>
          <div className="h-full w-full flex justify-end items-center">
            <span className="mr-[40px]">Длительность</span>
          </div>
        </div>
        <div className="ml-[40px] h-[65px] grid grid-cols-7 border-b-[1px] border-b-solid border-b-[#EAF0FA] text-[15px] callsTable">
          <div>
            <span className="h-full w-full flex justify-start items-center">
              <img src={blueArrow} alt="" />
            </span>
          </div>
          <div>
            <span className="h-full w-full  flex justify-start items-center">19:00</span>
          </div>
          <div className="h-full w-full  flex justify-start items-center">
            <span>
              <img src={avatar} alt="" />
            </span>
          </div>
          <div className="h-full w-full  flex justify-start items-center">
            <div>+7 (987) 567-17-12</div>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>Rabota.ru</span>
          </div>
          <div className="h-full w-full flex justify-start items-center">
            <span>ооо Отлично</span>
          </div>
          <div className="h-full w-full flex justify-end items-center">
            <span className="mr-[40px]">12:06</span>
          </div>
        </div>
      </div>
    </div>
  )
}
