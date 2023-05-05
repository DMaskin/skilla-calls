import { $host } from "../../http"

export async function fetchCalls(limit = 50) {
  const { data } = await $host.post(`/getList?limit=${limit}`)
  return data.results
}

export async function fetchAudio(id: string) {
  const { data } = await $host.post(
    `/getRecord?record=${id}`, {}, {
      responseType: "arraybuffer",
      headers: {
        "Content-Type": ["audio/mpeg", "audio/x-mpeg", "audio/x-mpeg-3", "audio/mpeg3"],
        "Content-Transfer-Encoding": "binary",
        "Content-Disposition": 'filename="record.mp3"',
      },
    }
  )
  return data
}
