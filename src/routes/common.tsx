import React from 'react'
import { RouteObject } from 'react-router-dom'
import { lazyImport } from '../utils/lazyImport'

// 主页面
const { AppPage } = lazyImport(() => import('../features/app'), 'AppPage')

export const commonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppPage />,
  },
]
