/*
 * @Descripttion: 🐉
 * @Author: xinxin
 * @Date: 2019-09-24 10:03:20
 * @LastEditTime : 2020-01-04 10:45:53
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || '雾灵知识服务网管理平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
