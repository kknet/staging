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
// 分期照片信息获取接口
export const getListImg = (params) => {
  return http.fetchPost('/zsdsys/apply/auditImageView.json', params)
}
// 分期点击确定,保存审核结果接口点击确定,保存审核结果接口
export const insure = (params) => {
  return http.fetchPost('/zsdsys/apply/secondCheckStatus.json', params)
}
// 分期审核结果获取
export const result = (params) => {
  return http.fetchPost('/zsdsys/apply/checkResult.json', params)
}