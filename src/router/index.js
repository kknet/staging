import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login'
import Home from '../components/Home'
import stageReview from '../pages/BorrowAudit/stageReview'
import detailReview from '../pages/BorrowAudit/detailReview'
import Review from '../pages/WithdrawalReview/review'
import borrowDetail from '../pages/WithdrawalReview/borrowDetail'
import Fund from '../pages/FundFlowWater/fund'
import BorrowRecord from '../pages/BorrowRecord/borrowRecord'
import BorrowDetail from '../pages/BorrowRecord/borrowDetail'
import WaitRefundRecord from '../pages/WaitRefundRecord/waitRefundRecord'
import CheckManage from '../pages/CheckManage/checkManage'
import UserDetail from '../pages/CheckManage/userDetail'
import DataStatistics from '../pages/DataStatistics/dataStatistics'
import AccountManage from '../pages/AccountManage/accountManage'
import PersonInfo from '../pages/AccountManage/personInfo'
import SecurityCompany from '../pages/SecurityCompany/securityCompany'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/stageReview',
          name: 'stageReview',
          component: stageReview
        },
        {
          path: '/detailReview',
          name: 'detailReview',
          component: detailReview
        },
        {
          path: '/review',
          name: 'Review',
          component: Review
        },
        {
          path: '/borrowDetail',
          name: 'borrowDetail',
          component: borrowDetail
        },
        {
          path: '/fund',
          name: 'Fund',
          component: Fund
        },
        {
          path: '/borrowRecord',
          name: 'BorrowRecord',
          component: BorrowRecord
        },
        {
          path: '/borrowDetail',
          name: 'BorrowDetail',
          component: BorrowDetail
        },
        {
          path: '/waitRefundRecord',
          name: 'WaitRefundRecord',
          component: WaitRefundRecord
        },
        {
          path: '/checkManage',
          name: 'CheckManage',
          component: CheckManage
        },
        {
          path: '/userDetail',
          name: 'UserDetail',
          component: UserDetail
        },
        {
          path: '/dataStatistics',
          name: 'DataStatistics',
          component: DataStatistics
        },
        {
          path: '/accountManage',
          name: 'AccountManage',
          component: AccountManage
        },
        {
          path: '/securityCompany',
          name: 'SecurityCompany',
          component: SecurityCompany
        },
        {
          path: '/personInfo',
          name: 'PersonInfo',
          component: PersonInfo
        }
      ]
    }
  ]
})
