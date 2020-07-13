import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const pxroutes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')// 路由懒加载
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/components/Test/test.vue')// 路由懒加载
  }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: pxroutes,
  mode: 'history'
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
