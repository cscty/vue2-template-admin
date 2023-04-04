import Mock from 'mockjs'

// 获取导航栏接口
Mock.mock('/getNavData', 'get', (req) => {
  return {
    status: 200,
    msg: 'ok',
    data: {
      sideData: [
        {
          path: '/home/main3',
          name: 'main3',
          id: 'main3',
          icon: 'el-icon-menu',
        },
        {
          path: '/home/main4',
          name: 'main4',
          id: 'main4',
          icon: 'el-icon-setting',
        },
      ],
    },
  }
})
