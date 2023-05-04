import React, {useState} from "react"
import down from "../../shared/icon/Filters/down.svg"
import up from "../../shared/icon/Filters/up.svg"
import active from "../../shared/icon/Filters/active.svg"
import {IFilter} from "./const";

export function Filter({filter} : {filter: IFilter}) {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const [currItem, setCurrItem] = useState(filter.title)
  const [options, setOptions] = useState([] as string[])

  function clickHandler() {
    setOptions(filter.options)
    setDropdownVisible(!dropdownVisible)
  }

  function chooseIcon() {
    if (dropdownVisible)
      return active
    return currItem === filter.title ? down : up
  }

  function chooseTextColor() {
    if (dropdownVisible || currItem !== filter.title)
      return "text-[#002CFB]"
    return
  }

  return (
    <div
      className={`relative cursor-pointer hover:text-[#002CFB] flex gap-2 items-center noSelectable ${chooseTextColor()}`}
      onClick={clickHandler}
    >
      <span>{currItem}</span>
      <img src={chooseIcon()} alt="" />
      {dropdownVisible && (
        <ul className="list-none absolute top-[40px] right-0 max-h-[320px] w-[204px] shadow-large bg-white rounded">
          {options.map((item: string) => (
            <li
              key={item}
              onClick={(e) => {
                e.stopPropagation()
                setCurrItem(item)
                setDropdownVisible(false)
              }}
              className="py-2 px-4 text-[#899CB1] hover:bg-[#ADBFDF] hover:text-[#122945] transition-colors cursor-pointer first:text-[#002CFB] first:hover:bg-white first:hover:text-[#002CFB]"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
