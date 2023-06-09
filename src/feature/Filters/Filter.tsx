import React, { useState } from "react"
import { useAppDispatch } from "../../app/hooks"
import {
  deleteFilter,
  filterByCallType,
  filterByEmployee,
  filterByErrors,
  filterByEval,
  filterBySource,
} from "../CallTable/callTableSlice"
import { IFilter } from "./const"
import up from "../../shared/icon/Filters/up.svg"
import { ReactComponent as DownSvg } from "../../shared/icon/Filters/down.svg"

export function Filter({ filter }: { filter: IFilter }) {
  const [currItem, setCurrItem] = useState<string | React.ReactElement>(filter.title)
  const dispatch = useAppDispatch()

  function optionClickHandler(item: string | React.ReactElement) {
    setCurrItem(item)

    if (typeof item !== "string") {
      const evalStatus = item.props["title"]
      dispatch(filterByEval(evalStatus))
      return
    }

    if (item === filter.title) {
      if (item === "Все оценки") {
        dispatch(deleteFilter("Скрипт не использован"))
        dispatch(deleteFilter("Все оценки"))
      }
      dispatch(deleteFilter(item))
      return
    }

    switch (filter.title) {
      case "Все типы":
        const in_out = item === "Входящие"
        dispatch(filterByCallType(in_out))
        break
      case "Все сотрудники":
        dispatch(filterByEmployee(item as string))
        break
      case "Все звонки":
        break
      case "Все источники":
        dispatch(filterBySource(item as string))
        break
      case "Все оценки":
        dispatch(filterByErrors(item as string))
        break
      case "Все ошибки":
        break
    }
  }

  return (
    <div
      className={
        currItem === filter.title
          ? "group relative cursor-pointer hover:text-[#002CFB] h-[40px] pb-[14px] flex gap-2 items-center"
          : "group relative cursor-pointer hover:text-[#002CFB] h-[40px] pb-[14px] flex gap-2 items-center text-[#002CFB]"
      }
    >
      <span>{currItem}</span>
      {currItem === filter.title ? (
        <div className="group-hover:stroke-[#002CFB]">
          <DownSvg />
        </div>
      ) : (
        <img src={up} alt="" />
      )}
      <ul className="hidden group-hover:block list-none absolute top-[40px] right-0 max-h-[320px] w-[204px] shadow-large bg-white rounded">
        {filter.options.map((item, idx) => (
          <li
            key={idx}
            onClick={() => optionClickHandler(item)}
            className="py-2 px-4 text-[#899CB1] hover:bg-[#D8E4FB] hover:text-[#122945] transition-colors cursor-pointer first:text-[#002CFB] first:hover:bg-white first:hover:text-[#002CFB] first:rounded-t last:rounded-b flex items-center gap-[10px]"
          >
            {filter.avatars?.length && <img src={filter.avatars[idx]} alt="" />}
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
