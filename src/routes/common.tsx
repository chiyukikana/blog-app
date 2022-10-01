import React from 'react'
import { RouteObject } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'

// 主页面
const { Home } = lazyImport(() => import('@/features/home'), 'Home')

// 归档页面
const { Archive } = lazyImport(() => import('@/features/archive'), 'Archive')

export const commonRoutes: RouteObject[] = [
  // 主界面
  {
    path: '/',
    element: <Home />,
    children: [
      // 默认显示最新归档
      {
        index: true,
        element: <Archive />,
      },
      // 显示指定日期的归档
      {
        path: '/archives/:year/:month',
        element: <Archive />,
      },
    ],
  },
]
