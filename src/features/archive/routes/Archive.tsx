import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import { Head } from '@/components/Head'
import { Markdown } from '../components/Markdown'
import { getArchive } from '../api/getArchive'
import { ArchiveProps, DateParamsProps } from '../types'

// 阻止路径改变时，发生无意义的网络请求。
let pathname: string

export const Archive: React.FC = () => {
  const params = useParams<DateParamsProps>()
  const location = useLocation()
  // 归档状态
  const [archive, setArchive] = useState<ArchiveProps>()
  // 获取归档
  useEffect(() => {
    // 路径检测
    if (!pathname) {
      pathname = location.pathname
    } else if (pathname !== location.pathname) {
      pathname = location.pathname
      // 重置归档状态
      setArchive(undefined)
    } else {
      return
    }
    // 归档请求
    if (params.year && params.month) {
      // 请求指定日期的归档
      getArchive(params.year, params.month).then(setArchive)
    } else {
      // 不填参数则请求最新归档
      getArchive().then(setArchive)
    }
  }, [params])
  // 渲染组件
  return archive ? (
    <>
      <Head title={archive.title} />
      <Markdown>{archive.markdown}</Markdown>
    </>
  ) : (
    <>
      {[...Array(16)].map((_value, index) => (
        <Skeleton
          key={index}
          variant="rounded"
          animation="wave"
          sx={{
            height: 24,
            mt: 2,
          }}
        />
      ))}
    </>
  )
}
