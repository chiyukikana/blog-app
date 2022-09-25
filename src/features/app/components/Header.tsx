import * as React from 'react'
import { Link, Toolbar, Typography } from '@mui/material'

const sections = [
  { title: 'Axios', url: 'https://axios-http.com' },
  { title: 'Material UI', url: 'https://mui.com' },
  { title: 'React', url: 'https://reactjs.org' },
  { title: 'Portainer', url: 'http://120.27.231.36:9000' },
]

export const Header: React.FC = () => {
  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          千秋花的博客
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map(section => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            target="_blank"
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </>
  )
}
