import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login/Login'
import Home from '../components/Home'
import stageReview from '../pages/BorrowAudit/stageReview'
import detailReview from '../pages/BorrowAudit/detailReview'
import Review from '../pages/WithdrawalReview/review'
import Fund from '../pages/FundFlowWater/fund'
import BorrowRecord from '../pages/BorrowRecord/borrowRecord'
import BorrowDetail from '../pages/BorrowRecord/borrowDetail'
import WaitRefundRecord from '../pages/WaitRefundRecord/waitRefundRecord'
import UserManage from '../pages/UserManage/userManage'
import UserDetail from '../pages/UserManage/userDetail'
import DataStatistics from '../pages/DataStatistics/dataStatistics'
import AccountManage from '../pages/AccountManage/accountManage'

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
          path: '/userManage',
          name: 'UserManage',
          component: UserManage
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
        }
      ]
    }
  ]
})
