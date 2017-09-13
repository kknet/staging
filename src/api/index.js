import http from './public'
// 登录接口
export const userLogin = (params) => {
  return http.fetchPost('/zsdsys/login.json', params)
}
// 分期审核列表获取接口
export const checkView = (params) => {
  return http.fetchPost('/zsdsys/apply/checkView.json', params)
}
// 分期审核列表获取接口
export const reviewDetail = (params) => {
  return http.fetchPost('/zsdsys/apply/checkView.json', params)
}
// 审核员列表获取接口
export const getCheckers = (params) => {
  return http.fetchPost('/zsdsys/employee/employeeView.json', params)
}
// 添加审核员接口
export const addChecker = (params) => {
  return http.fetchPost('/zsdsys/employee/employeeInsert.json', params)
}
// 安保公司下拉框接口
export const getCompanyList = () => {
  return http.fetchPost('/zsdsys/employee/securityCompanyView.json')
}
// 审核员禁用启用接口
export const forbiddenToggle = (params) => {
  return http.fetchPost('/zsdsys/employee/forbiddenEmp.json', params)
}
// 账号管理接口
export const accountManage = (params) => {
  return http.fetchPost('/zsdsys/admin/adminerView.json', params)
}
// 添加管理员接口
export const addManage = (params) => {
  return http.fetchPost('/zsdsys/admin/adminerInsert.json', params)
}
// forbiddenToggle
export const forbiddenToggleAdmin = (params) => {
  return http.fetchPost('/zsdsys/admin/forbiddenAdmin.json', params)
}
// 编辑账号接口
export const editAccount = (params) => {
  return http.fetchPost('/zsdsys/admin/forbiddenAdmin.json', params)
}