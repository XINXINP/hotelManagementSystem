import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {token}
  })
}
export function sign (userform) {
  return request({
    url: 'http://www.pxiou.club/wuling/signup',
    method: 'post',
    data: userform
  })
}
export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
export function getUser () {
  return request({
    url: 'http://www.pxiou.club/wuling/user',
    method: 'get'
  })
}

export function deleteUser (advert) {
  return request({
    url: 'http://www.pxiou.club/wuling/deleteUser',
    method: 'post',
    data: advert
  })
}
