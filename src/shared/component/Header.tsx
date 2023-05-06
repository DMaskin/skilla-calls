import React from "react"
import callsBar from "../icon/Header/callsBar.svg"
import qualityBar from "../icon/Header/qualityBar.svg"
import conversionBar from "../icon/Header/conversionBar.svg"
import search from "../icon/Header/search.svg"
import avatar from "../img/Header/avatar.png"
import arrow from "../icon/Header/arrow.svg"
import {getCurrentDate} from "../lib/utils";

export function Header() {
  return (
    <div className="w-full bg-white shadow-small">
      <div className="h-[64px] ml-[120px] mr-[120px] flex flex-row justify-between items-center">
        <div className="text-textHeader">{getCurrentDate()}</div>
        <div className="flex flex-row gap-[56px]">
          <div className="flex flex-col gap-[7px]">
            <div>
              <span className="text-[14px] text-[#122945]">Новые звонки </span>
              <span className="text-[14px] text-[#00A775]">20 из 30 шт</span>
            </div>
            <img src={callsBar} alt="" />
          </div>
          <div className="flex flex-col gap-[7px]">
            <div>
              <span className="text-[14px] text-[#122945]">Качество разговоров </span>
              <span className="text-[14px] text-[#FFB800]">40%</span>
            </div>
            <img src={qualityBar} alt="" />
          </div>
          <div className="flex flex-col gap-[7px]">
            <div>
              <span className="text-[14px] text-[#122945]">Конверсия в заказ </span>
              <span className="text-[14px] text-[#EA1A4F]">67%</span>
            </div>
            <img src={conversionBar} alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-[64px]">
          <img src={search} alt="" />
          <div className="flex gap-[47px]">
            <div className="flex flex-row justify-center items-center gap-[10px]">
              <span className="text-[15px] text-[#899CB1]">ИП Сидорова Александра Михайловна</span>
              <img src={arrow} alt="" />
            </div>
            <div className="flex flex-row gap-[10px]">
              <img src={avatar} alt="" />
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
