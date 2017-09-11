// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'babel-polyfill'
import './common/scss/reset.scss'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
var qs = require('querystring')
Vue.prototype.$http = axios.create({
  baseURL: 'http://chaozhi.hk',
  timeout: 10000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [function (data) {
    data = qs.stringify(data)
    return data
  }]
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
