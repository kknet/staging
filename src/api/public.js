import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 5000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

// // POST传参序列化
// axios.interceptors.request.use((config) => {
//   console.log(config)
//   if (config.method === 'post') {
//     config.data = qs.stringify(config.data)
//   }
//   return config
// }, (error) => {
//   // _.toast("错误的传参", 'fail');
//   return Promise.reject(error)
// })

export default {
  fetchGet(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data)).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}