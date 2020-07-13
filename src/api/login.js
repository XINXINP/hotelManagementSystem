import request from '@/utils/request'
const baseApi = 'http://www.pxiou.club/wuling/'
export function login (lond) {
  return request({
    url: baseApi + 'login',
    method: 'post',
    data: lond
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
export function logout () {
  return request({
    url: 'https://www.pxiou.club/car/logoff',
    method: 'get'
  })
}
