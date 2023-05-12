import React from "react"
import { filters, IFilter } from "./const"
import { Filter } from "./Filter"

export function Filters() {
  return (
    <div className="flex gap-9">
      {filters.map((filter: IFilter) => (
        <React.Fragment key={filter.title}>
          <Filter filter={filter} />
        </React.Fragment>
      ))}
    </div>
  )
}
