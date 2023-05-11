import React from "react"
import { Navbar } from "../shared/component/Navbar"
import {Header} from "../shared/component/Header";
import {ProfileInfoGroup} from "../shared/component/ProfileInfoGroup";
import {Search} from "../feature/Search/Search";
import {Filters} from "../feature/Filters/Filters";
import {CallTable} from "../feature/CallTable/CallTable";

export function CallPage() {
  return (
    <div className="flex flex-row w-full h-[100vh]">
      <Navbar />
      <div className="bg-mainBackground w-full h-full pb-20">
        <Header />
        <ProfileInfoGroup />
        <div className="ml-[120px] mr-[120px] mt-[34px] flex justify-between text-[14px] text-[#5E7793]">
          <Search />
          <Filters />
        </div>
        <CallTable />
      </div>
    </div>
  )
}
