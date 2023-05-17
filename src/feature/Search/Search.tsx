import React, { useState } from "react"
import searchIcon from "../../shared/icon/Search/search.svg"
import hoveredSearch from "../../shared/icon/Search/hoveredSearch.svg"

export function Search() {
  const [search, setSearch] = useState("")
  const [users, setUsers] = useState(["Василий", "Григорий", "Максим", "Петя", "Иван"])
  const [dropdownVisible, setDropdownVisible] = useState(false)

  function searchChangeHandler(value: string) {
    setSearch(value)
  }

  return (
    <div className="relative max-w-[260px]">
      <img src={searchIcon} className="absolute py-2.5 px-[18px]" alt="" />
      <input
        type="text"
        placeholder={"Поиск по звонкам"}
        className="indent-[25px] py-2 bg-mainBackground outline-0 px-4 w-full max-h-[35px] focus:bg-white rounded-[48px] focus:border-[1px] focus:border-[#002CFB]"
        value={search}
        onChange={(e) => {
          searchChangeHandler(e.target.value)
          setDropdownVisible(true)
        }}
      />
      {dropdownVisible && (
        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white rounded">
          {users?.map((user: string) => (
            <li
              key={user}
              onClick={(e) => {
                e.stopPropagation()
                setSearch(user)
                setDropdownVisible(false)
              }}
              className="py-2 px-4 text-[#899CB1] hover:bg-[#ADBFDF] hover:text-[#122945] transition-colors cursor-pointer"
            >
              {user}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
