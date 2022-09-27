import React from 'react'
import { Divider, Typography } from '@mui/material'
import { Markdown } from '../components/Markdown'
import { ArchiveProps } from '../types'
import { useParams } from 'react-router-dom'
import { getArchive } from '../api/getArchive'
import { Loading } from '../components/Loading'
import { Head } from '@/components/Head'

export const Archive: React.FC = () => {
  const params = useParams()
  // 初始化状态
  const [state, setState] = React.useState<ArchiveProps>()
  // 获取数据
  React.useEffect(() => {
    // 重置状态
    setState(() => undefined)
    // 重新获取数据
    getArchive(params.year as string, params.month as string).then(resp =>
      setState(() => resp.data)
    )
  }, [params])
  // 渲染组件
  return state ? (
    <>
      <Head title={state.title} />
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
