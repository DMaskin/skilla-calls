import React from "react"
import { Header } from "./Header"
import { CallTable } from "../../feature/CallTable/CallTable"

export function Layout() {
  return (
    <div className="bg-mainBackground w-full h-full">
      <Header />
      <CallTable />
    </div>
  )
}
