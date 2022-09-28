import React from 'react'
import { Spinner } from '@/components/Elements'
import { Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Title: React.FC = () => (
  <Typography variant="h6" gutterBottom>
    预览
  </Typography>
)

export const Preview: React.FC = () => {
  return (
    <React.Suspense
      fallback={
        <Spinner
          sx={{
            position: 'relative',
            height: 191,
          }}
        />
      }
    >
      <Title />
      <Outlet />
    </React.Suspense>
  )
}
