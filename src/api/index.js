import http from './public'
export const userLogin = (params) => {
  return http.fetchGet('/zsdsys/goods', params)
}