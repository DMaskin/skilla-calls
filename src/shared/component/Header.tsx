import React from "react"
import { getCurrentDate } from "../lib/utils"
import callsBar from "../icon/Header/callsBar.svg"
import qualityBar from "../icon/Header/qualityBar.svg"
import conversionBar from "../icon/Header/conversionBar.svg"
import search from "../icon/Header/search.svg"
import avatar from "../img/Header/avatar.png"
import { ReactComponent as DetailSVG } from "../icon/Header/arrow.svg"
import { ReactComponent as LogoutSVG } from "../icon/Header/logout.svg"
import ellipse from "../icon/Header/ellipse.svg"
import calls from "../icon/Header/calls.svg"
import mail from "../icon/Header/mail.svg"
import avatar2 from "../img/Header/avatar2.png"
import login from "../icon/Header/login.svg"

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
          <div className="flex gap-[47px] h-full">
            <div className="flex flex-row justify-center items-center gap-[10px]">
              <span className="text-[15px] text-[#899CB1]">ИП Сидорова Александра Михайловна</span>
              <DetailSVG />
            </div>
            <div className="group/arrow relative flex flex-row gap-[10px] py-[12px]">
              <img className="cursor-pointer" src={avatar} alt="" />
              <div className="flex items-center transform group-hover/arrow:rotate-180 [&_path]:group-hover/arrow:fill-[#002CFB] cursor-pointer">
                <DetailSVG />
              </div>
              <div className="hidden group-hover/arrow:block absolute z-[3] top-[64px] right-0 w-[368px] bg-white shadow-large p-[32px] border-[#EAF0FA] border-[1px] rounded-[4px]">
                <div className="flex justify-between mb-[6px]">
                  <span className="text-[18px] font-medium">Упоров Кирилл</span>
                  <div className="[&_path]:hover:fill-[#0024CB] cursor-pointer">
                    <LogoutSVG />
                  </div>
                </div>
                <div className="flex gap-2 text-[15px] text-[#5E7793] mb-5">
                  <span>Директор</span>
                  <img src={ellipse} alt="" />
                  <span>Санкт-Петербург</span>
                </div>
                <div className="flex gap-3 text-[#5E7793] text-[15px] mb-2">
                  <img src={calls} alt="" />8 (800) 333-17-21
                </div>
                <div className="flex gap-3 text-[#5E7793] text-[15px] border-b-[1px] border-b-[#EAF0FA] pb-[16px] mb-[16px]">
                  <img src={mail} alt="" />
                  hi@skilla.ru
                </div>
                <div className="text-[15px] mb-4">
                  <div className="text-[#5E7793] mb-2">Операторы</div>
                  <ul className="flex flex-col cursor-pointer">
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Мирон Батонов
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Алексей Ильин
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Милана Константинопольская
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                  </ul>
                </div>
                <div className="text-[15px] mb-4">
                  <div className="text-[#5E7793] mb-2">Логисты</div>
                  <ul className="flex flex-col cursor-pointer">
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Александра Сизых
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Илья Алексеев
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Владимир Петров
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                  </ul>
                </div>
                <div className="text-[15px]">
                  <div className="text-[#5E7793] mb-2">Бухгалтеры</div>
                  <ul className="flex flex-col cursor-pointer">
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Полина Калинина
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Наталья Натальева
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                    <li className="group item-list transition-colors text-[#005FF8] hover:text-[#0024CB] flex justify-between items-center hover:bg-[#dee4ff] py-2 px-[32px] mx-[-32px]">
                      <div className="flex gap-3 items-center">
                        <img src={avatar2} alt="" />
                        Константин Константинопольский
                      </div>
                      <img className="hidden group-hover-[.item-list]:block" src={login} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
