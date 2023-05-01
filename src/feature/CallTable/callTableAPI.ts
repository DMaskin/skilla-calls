import { $host } from "../../http"

export async function fetchCalls() {
  const { data } = await $host.post("/getList")
  return data.results
}
