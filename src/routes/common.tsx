import React from 'react'
import { RouteObject } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'

// 主页面
const { Home } = lazyImport(() => import('@/features/home'), 'Home')

// 内容页面
const { LatestArchive } = lazyImport(
  () => import('@/features/archive'),
  'LatestArchive'
)
const { Archive } = lazyImport(() => import('@/features/archive'), 'Archive')

export const commonRoutes: RouteObject[] = [
  // 主界面
  {
    path: '/',
    element: <Home />,
    children: [
      // 默认显示最新的文章内容
      {
        index: true,
        element: <LatestArchive />,
      },
      // 其他年月份的文章内容
      {
        path: '/archives/:year/:month',
        element: <Archive />,
      },
    ],
  },
]
