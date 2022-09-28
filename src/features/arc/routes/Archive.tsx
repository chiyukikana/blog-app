import React from 'react'
import { useParams } from 'react-router-dom'
import { Skeleton } from '@mui/material'
import { Head } from '@/components/Head'
import { getArc } from '../api/getArc'
import { getLatestArc } from '../api/getLatestArc'
import { Markdown } from '../components/Markdown'
import { ArcConfigProps, ArcParamProps } from '../types'

interface IProps {
  // 获取最新归档内容，默认需要 指定日期 才能获取归档内容！
  latest?: boolean
}

export const Archive: React.FC<IProps> = ({ latest }) => {
  const params = useParams<ArcParamProps>()
  // 初始化状态
  const [state, setState] = React.useState<ArcConfigProps>()
  // 获取数据
  React.useEffect(() => {
    // 重置状态
    if (state) {
      setState(() => undefined)
    }
    // 重新获取 最新的内容 或 指定年月日的内容
    const { year, month } = params as ArcParamProps
    if (latest) {
      getLatestArc().then(resp => setState(() => resp.data))
    } else {
      getArc(year, month).then(resp => setState(() => resp.data))
    }
  }, [params])
  // 渲染组件
  return state ? (
    <>
      <Head title={state.title} />
      <Markdown>{state.index}</Markdown>
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
