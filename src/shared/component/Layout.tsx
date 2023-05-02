import React from "react"
import { Header } from "./Header"
import { CallTable } from "../../feature/CallTable/CallTable"
import {ProfileInfoGroup} from "./ProfileInfoGroup";
import {Search} from "../../feature/Search";

export function Layout() {
  return (
    <div className="bg-mainBackground w-full h-full">
      <Header />
      <ProfileInfoGroup />
      <Search />
      <CallTable />
    </div>
  )
}
