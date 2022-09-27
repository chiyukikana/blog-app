import React from 'react'
import { Divider, Typography } from '@mui/material'
import { Markdown } from '../components/Markdown'
import { ArchiveConfigProps } from '../types'
import { getLatestArchiveConfig } from '../api/getLatestArchiveConfig'
import { Loading } from '../components/Loading'
import { Head } from '../../../components/Head'

export const LatestArchive: React.FC = () => {
  // 初始化状态
  const [state, setState] = React.useState<ArchiveConfigProps>()
  // 获取数据
  React.useEffect(() => {
    getLatestArchiveConfig().then(resp => setState(resp.data))
  }, [])
  // 渲染组件
  return state ? (
    <>
      <Head title="最新归档" />
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
