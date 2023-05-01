import React from "react"
import { Navbar } from "../shared/component/Navbar"
import { Layout } from "../shared/component/Layout"

export function CallPage() {
  return (
    <div className="flex flex-row w-full h-[100vh]">
      <Navbar />
      <Layout />
    </div>
  )
}
