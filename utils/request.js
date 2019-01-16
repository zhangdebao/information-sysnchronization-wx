const host = 'http://192.168.1.108:8080'
/**
 * get: get请求
 * url: 请求地址
 * data: 请求参数
 * success: 请求成功回掉函数
 * fail: 请求失败回掉函数
 */
const get = function ({ url, data }) {
  return new Promise((resolve, reject) => {
    url = `${host}${url}`
    wx.request({
      url,
      data,
      method: 'GET',
      success: (res) => {
        console.log(`请求成功`, {
          url, data
        })
        resolve(res)
      },
      fail: () => {
        console.log(`${url}请求失败`, {
          url, data
        })
        reject()
      }
    })
  })
}
/**
 * post: post请求
 * url: 请求地址
 * data: 请求参数
 * success: 请求成功回掉函数
 * fail: 请求失败回掉函数
 */
const post = function ({ url, data }) {
  new Promise((resolve, reject) => {
    url = `${host}${url}`
    wx.request({
      url,
      data,
      method: 'POST',
      success: (res) => {
        console.log(`请求成功`, {
          url, data
        })
        resolve(res)
      },
      fail: () => {
        console.log(`${url}请求失败`, {
          url, data
        })
        reject()
      }
    })
  })
}
export default {
  get,
  post
}