import React from 'react'
import { commonRoutes } from './common'
import { useRoutes } from 'react-router-dom'
import { lazyImport } from '@/utils/lazyImport'

// 404页面
const { NotFound } = lazyImport(() => import('@/features/misc'), 'NotFound')

export const AppRoutes: React.FC = () => {
  const routes = [
    // 基础路由
    ...commonRoutes,
    // 404路由
    {
      path: '*',
      element: <NotFound />,
    },
  ]
  const element = useRoutes(routes)

  return <>{element}</>
}
