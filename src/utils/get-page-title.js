import defaultSettings from '@/settings'

const title = defaultSettings.title || '基于element-ui的vue框架'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
