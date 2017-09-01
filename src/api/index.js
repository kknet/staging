import http from './public'
export const userLogin = (params) => {
  return http.fetchGet('/zsdsys/users/getuserInfo', params)
}