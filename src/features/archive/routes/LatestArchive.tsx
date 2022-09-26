import React from 'react'
import { Divider, Typography } from '@mui/material'
import { Markdown } from '../components/Markdown'
import { IArchiveConfig } from '../types'
import { getLatestArchiveConfig } from '../api/getLatestArchiveConfig'
import { Loading } from '../components/Loading'

export const LatestArchive: React.FC = () => {
  // 初始化状态
  const [state, setState] = React.useState<IArchiveConfig>()
  // 获取数据
  React.useEffect(() => {
    getLatestArchiveConfig().then(resp => setState(resp.data))
  }, [])
  // 渲染组件
  return state ? (
    <>
      <Typography variant="h6" gutterBottom>
        {state.title}
      </Typography>
      <Divider />
      <Markdown>{state.index}</Markdown>
    </>
  ) : (
    <Loading />
  )
}
