import http from './public'
export const userLogin = (params) => {
  return http.fetchPost('/zsdsys/login.json', params)
}