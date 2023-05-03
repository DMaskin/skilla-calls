import React, { useEffect, useState } from "react"
import down from "../../shared/icon/Filters/down.svg"
import up from "../../shared/icon/Filters/up.svg"
import active from "../../shared/icon/Filters/active.svg"

export function Filters() {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [currItem, setCurrItem] = useState("Все типы")
  const [items, setItems] = useState([] as string[])

  function clickHandler() {
    setItems(["Все типы", "Входящие", "Исходящие"])
    setDropdownVisible(true)
  }

  function chooseIcon() {
    if (dropdownVisible)
      return active
    return currItem === "Все типы" ? down : up
  }

  function chooseTextColor() {
    if (dropdownVisible || currItem !== "Все типы")
      return "text-[#002CFB]"
    return
  }

  return (
    <div
      className={`relative w-[560px] cursor-pointer hover:text-[#002CFB] flex gap-2 items-center ${chooseTextColor()}`}
      onClick={clickHandler}
    >
      <span>{currItem}</span>
      <img src={chooseIcon()} alt="" />
      {dropdownVisible && (
        <ul className="list-none absolute top-[40px] left-0 right-0 max-h-[120px] max-w-[204px] shadow-md bg-white rounded">
          {items.map((item: string) => (
            <li
              key={item}
              onClick={(e) => {
                e.stopPropagation()
                setCurrItem(item)
                setDropdownVisible(false)
              }}
              className="py-2 px-4 text-[#899CB1] hover:bg-[#ADBFDF] hover:text-[#122945] transition-colors cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
