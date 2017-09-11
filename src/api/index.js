import http from './public'
export const userLogin = (params) => {
  return http.fetchPost('/zsdsys/goods', params)
}
// 分期审核列表获取接口
export const checkView = (params) => {
  return http.fetchPost('/zsdsys/apply/checkView.json', params)
}
// 分期审核列表获取接口
export const reviewDetail = (params) => {
  return http.fetchPost('/zsdsys/apply/checkView.json', params)
}