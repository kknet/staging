import http from './public'
export const userLogin = (params) => {
  return http.fetchGet('/zsdsys/goods', params)
}
export const getCheckerList = (params) => {
  return http.fetchPost('/zsdsy/employee/employeeView.json', params)
}