import * as React from 'react'
import { APP_NAME } from '@/config'
import { Link as MuiLink, Skeleton, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getSections } from '../api/getSections'
import { SectionProps } from '../types'

export const Header: React.FC = () => {
  // 初始化状态
  const [state, setState] = useState<SectionProps[]>()
  // 获取数据
  useEffect(() => {
    getSections().then(res => setState(() => res.data))
  }, [])
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
        sx={{
          justifyContent: 'space-between',
          overflowX: 'auto',
        }}
      >
        {state ? (
          state.map(section => (
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
          ))
        ) : (
          <Skeleton width="100%" sx={{ p: 1, flexShrink: 0 }} />
        )}
      </Toolbar>
    </>
  )
}
