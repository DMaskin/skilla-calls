import axios from "axios"

const BASE_URL = process.env.REACT_APP_URL
const TOKEN = "testtoken"

const $host = axios.create({
  baseURL: BASE_URL,
})

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${TOKEN}`
  return config
}

$host.interceptors.request.use(authInterceptor)

export { $host }
