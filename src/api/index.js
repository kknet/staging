import http from './public'
// 登录接口
export const userLogin = (params) => {
  return http.fetchPost('/zsdsys/login.json', params)
}
// 修改密码接口
export const modifyPassword = (params) => {
  console.log(params)
  return http.fetchPost('/zsdsys/admin/editPassword.json', params)
}
// 重置密码接口
export const resetPassword = (params) => {
  return http.fetchPost('/zsdsys/admin/resetPassword.json', params)
}
// 账户详情接口(个人信息接口)
export const personInfo = (params) => {
  return http.fetchPost('/zsdsys/admin/currentAdminer.json', params)
}
// 分期审核列表获取接口
export const checkView = (params) => {
  return http.fetchPost('/zsdsys/apply/checkView.json', params)
}
// 分期审核结果
export const checkResult = (params) => {
  return http.fetchPost('/zsdsys/apply/checkResult.json', params)
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
// 分期安保公司列表
export const companyList = (params) => {
  return http.fetchPost('/zsdsys/securityCompany/securityCompanyView.json', params)
}
// 分期获取省
export const getProvince = (params) => {
  return http.fetchPost('/zsdsys/common/area/province.json', params)
}
// 分期获取市区
export const getCity = (params) => {
  return http.fetchPost('/zsdsys/common/area/subList.json', params)
}
// 添加安保公司
export const addCompany = (params) => {
  return http.fetchPost('/zsdsys/securityCompany/securityCompanyInsert.json', params)
}
// 编辑安保公司
export const eidtCompany = (params) => {
  return http.fetchPost('/zsdsys/securityCompany/forbiddenSec.json', params)
}
// 借款记录列表
export const applyList = (params) => {
  return http.fetchPost('/zsdsys/apply/applyView.json', params)
}
// 借款记录点击详情,借款信息接口
export const applyDetail = (params) => {
  return http.fetchPost('/zsdsys/apply/checkView.json', params)
}
// 借款记录还款计划接口
export const repay = (params) => {
  return http.fetchPost('/zsdsys/apply/repaymentView.json', params)
}
// 借款记录点击代还款接口
export const repayMony = (params) => {
  return http.fetchPost('/zsdsys/apply/editStatus.json', params)
}
// 借款记录安保公司列表接口
export const companySelect = (params) => {
  return http.fetchPost('/zsdsys/securityCompany/securityCompanyView.json', params)
}
