import * as React from 'react'
import { APP_NAME } from '@/config'
import { Link as MuiLink, Toolbar, Typography } from '@mui/material'

const sections = [
  {
    title: '2022年浙江省技工院校网站设计与开发技能竞赛',
    url: 'https://mp.weixin.qq.com/s/a7Yfhvau8aaEpaue4yBszA',
  },
  { title: 'Axios', url: 'https://axios-http.com' },
  { title: 'Material UI', url: 'https://mui.com' },
  { title: 'React', url: 'https://reactjs.org' },
  { title: 'Portainer', url: 'http://120.27.231.36:9000' },
]

export const Header: React.FC = () => {
  return (
    <>
      <Toolbar
        id="back-to-top-anchor"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {APP_NAME}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map(section => (
          <MuiLink
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            target="_blank"
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </MuiLink>
        ))}
      </Toolbar>
    </>
  )
}
