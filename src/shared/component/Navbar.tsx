import React from "react"
import logo from "../icon/Navbar/logo.svg"
import result from "../icon/Navbar/result.svg"
import order from "../icon/Navbar/order.svg"
import message from "../icon/Navbar/message.svg"
import call from "../icon/Navbar/call.svg"
import people from "../icon/Navbar/people.svg"
import docs from "../icon/Navbar/docs.svg"
import executor from "../icon/Navbar/executor.svg"
import report from "../icon/Navbar/report.svg"
import lib from "../icon/Navbar/lib.svg"
import settings from "../icon/Navbar/setting.svg"
import newIcon from "../icon/Navbar/new.svg"

interface MenuItem {
  title: string
  icon: string
  inFocus: boolean
}

const items: MenuItem[] = [
  { title: "Итоги", icon: result, inFocus: false },
  { title: "Заказы", icon: order, inFocus: false },
  { title: "Сообщения", icon: message, inFocus: false },
  { title: "Звонки", icon: call, inFocus: true },
  { title: "Контрагенты", icon: people, inFocus: false },
  { title: "Документы", icon: docs, inFocus: false },
  { title: "Исполнители", icon: executor, inFocus: false },
  { title: "Отчёты", icon: report, inFocus: false },
  { title: "База знаний", icon: lib, inFocus: false },
  { title: "Настройки", icon: settings, inFocus: false },
]

export function Navbar() {
  return (
    <div className="w-[240px] h-[100%] bg-[#091336]">
      <div className="pt-5 pl-[12px] h-[80px]">
        <img src={logo} alt="" />
      </div>
      {items.map((item, idx) => (
        <div key={idx}
          className={`w-[240px] h-[52px] flex flex-row flex justify-between items-center gap-[13px] pl-[13px] ${
            item.inFocus ? "text-white bg-[#D8E4FB]/[0.32]" : "text-white/[0.6]"
          } `}
        >
          <div className="flex gap-[13px]">
            <img src={item.icon} alt="" />
            {item.title}
          </div>
          {item.inFocus && (
            <div className="flex justify-end items-center items-end pr-[4px]">
              <img src={newIcon} alt="" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
