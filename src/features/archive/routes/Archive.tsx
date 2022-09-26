import React from 'react'
import { Divider, Typography } from '@mui/material'
import { Markdown } from '../components/Markdown'
import { IArchiveConfig } from '../types'
import { useParams } from 'react-router-dom'
import { getArchiveConfig } from '../api/getArchiveConfig'
import { Loading } from '../components/Loading'

export const Archive: React.FC = () => {
  const params = useParams()
  // 初始化状态
  const [state, setState] = React.useState<IArchiveConfig>()
  // 获取数据
  React.useEffect(() => {
    // 重置状态
    setState(() => undefined)
    // 重新获取数据
    getArchiveConfig(params.year as string, params.month as string).then(resp =>
      setState(() => resp.data)
    )
  }, [params])
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
