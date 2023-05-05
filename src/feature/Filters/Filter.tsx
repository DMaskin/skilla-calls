import React, { useState } from "react"
import down from "../../shared/icon/Filters/down.svg"
import up from "../../shared/icon/Filters/up.svg"
import active from "../../shared/icon/Filters/active.svg"
import { IFilter } from "./const"

export function Filter({ filter }: { filter: IFilter }) {
  const [currItem, setCurrItem] = useState(filter.title)

  function chooseIcon() {
    return currItem === filter.title ? down : up
  }

  return (
    <div className="group relative cursor-pointer hover:text-[#002CFB] h-[40px] pb-[14px] flex gap-2 items-center">
      <span>{currItem}</span>
      <img src={chooseIcon()} alt="" />
      <ul className="hidden group-hover:block list-none absolute top-[40px] right-0 max-h-[320px] w-[204px] shadow-large bg-white rounded">
        {filter.options.map((item: string) => (
          <li
            key={item}
            onClick={(e) => setCurrItem(item)}
            className=" py-2 px-4 text-[#899CB1] hover:bg-[#D8E4FB] hover:text-[#122945] transition-colors cursor-pointer first:text-[#002CFB] first:hover:bg-white first:hover:text-[#002CFB]"
          >
            {item}
          </li>
        ))}
      </ul>
      {/*)}*/}
    </div>
  )
}
