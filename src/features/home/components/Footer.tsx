import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Link as MuiLink,
  Skeleton,
  Typography,
} from '@mui/material'
import { HotokotoProps } from '../types'
import { getHitokoto } from '../api/getHitokoto'

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright &copy;{' '}
      <MuiLink
        color="inherit"
        href="https://github.com/chiyukikana"
        target="_blank"
      >
        Kana Chiyuki
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export const Footer: React.FC = () => {
  // 初始化状态
  const [state, setState] = useState<HotokotoProps>()
  // 获取数据
  useEffect(() => {
    getHitokoto().then(res => setState(() => res.data))
  }, [])
  // 渲染组件
  return (
    <Box component="footer" sx={{ backgroundColor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          呼～到底啦！
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {state ? (
            state?.hitokoto
          ) : (
            <Skeleton
              animation="wave"
              variant="rounded"
              width={300}
              sx={{
                margin: '0 auto',
              }}
            />
          )}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}
