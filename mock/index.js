const Mock = require('mockjs')
// 使用mockjs模拟数据
const Random = Mock.Random
let dataList = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': '@FIRST',
    'creatTime': Random.datetime()
  }]
})
Mock.mock('/user/info', 'get', (req, res) => {
  return {
    status: 0,
    data: dataList,
    message: '成功'
  }
})
Mock.mock('/order', 'get', (req, res) => {
  return {
    status: 2,
    data: dataList,
    message: '成功'
  }
})
