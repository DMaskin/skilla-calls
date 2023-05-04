import { $host } from "../../http"

export async function fetchCalls(limit = 50) {
  const { data } = await $host.post(`/getList?limit=${limit}`)
  return data.results
}
