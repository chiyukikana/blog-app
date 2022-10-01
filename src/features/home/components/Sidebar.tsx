import React, { useEffect, useState } from 'react'
import {
  Grid,
  Link as MuiLink,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { SidebarProps } from '../types'
import { getSidebarInfo } from '../api/getSidebarInfo'
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material'

// 社交链接
const social = [
  {
    name: 'GitHub',
    link: 'https://github.com/chiyukikana',
    icon: <GitHubIcon />,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/chiyukikana',
    icon: <TwitterIcon />,
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com/chiyukikana',
    icon: <FacebookIcon />,
  },
]

export const Sidebar: React.FC = () => {
  // 初始化状态
  const [state, setState] = useState<SidebarProps>()
  // 获取数据
  useEffect(() => {
    getSidebarInfo().then(res => setState(() => res.data))
  }, [])
  // 渲染组件
  return (
    <Grid item xs={12} md={4}>
      {state ? (
        <>
          <Paper elevation={0} sx={{ p: 2, backgroundColor: 'grey.200' }}>
            <Typography variant="h6" gutterBottom>
              {state?.title}
            </Typography>
            <Typography>{state?.description}</Typography>
          </Paper>
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            归档
          </Typography>
          {state?.archives.slice(0, 12).map(archive => (
            <MuiLink
              display="block"
              variant="body1"
              key={archive.title}
              component={RouterLink}
              to={archive.url}
            >
              {archive.title}
            </MuiLink>
          ))}
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            社交
          </Typography>
          {social.map(network => (
            <MuiLink
              display="block"
              variant="body1"
              href={network.link}
              target="_blank"
              key={network.name}
              sx={{ mb: 0.5 }}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                {network.icon}
                <span>{network.name}</span>
              </Stack>
            </MuiLink>
          ))}
        </>
      ) : (
        <>
          {[191, 371, 119].map((height, index) => (
            <Skeleton
              key={index}
              sx={{
                mt: index > 0 ? 3 : null,
              }}
              variant={index > 0 ? 'rectangular' : 'rounded'}
              animation="wave"
              height={height}
            />
          ))}
        </>
      )}
    </Grid>
  )
}
