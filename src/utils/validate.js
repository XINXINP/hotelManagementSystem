/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2020-04-11 13:34:21
 * @LastEditTime: 2020-04-25 20:01:59
 */
/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  // const valid_map = ['admin', 'editor']
  return str.length >= 0
}
