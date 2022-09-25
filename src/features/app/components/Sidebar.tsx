import React from 'react'
import { Grid, Link, Paper, Skeleton, Stack, Typography } from '@mui/material'
import { ISidebar } from '../types'
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
  const [state, setState] = React.useState<ISidebar | undefined>(undefined)
  // 获取数据
  React.useEffect(() => {
    getSidebarInfo().then(resp => setState(resp.data))
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
            Archives
          </Typography>
          {state?.archives.map(archive => (
            <Link
              display="block"
              variant="body1"
              href={archive.url}
              key={archive.title}
            >
              {archive.title}
            </Link>
          ))}
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Social
          </Typography>
          {social.map(network => (
            <Link
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
            </Link>
          ))}
        </>
      ) : (
        <>
          {[143, 303, 106].map((height, index) => (
            <Skeleton
              key={index}
              sx={{
                mt: index > 0 ? 3 : null,
              }}
              variant="rounded"
              animation="wave"
              height={height}
            />
          ))}
        </>
      )}
    </Grid>
  )
}
