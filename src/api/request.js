import axios from 'axios'

// const baseUrl = 'http://192.168.200.109:3000'
// const baseUrl = 'http://10.3.4.183:3000'
const baseUrl = 'http://localhost:3000'

export const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true
})

instance.interceptors.request.use(config => {
  // console.log(config)
  return config
}, err => {
  console.log(err)
})
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
})