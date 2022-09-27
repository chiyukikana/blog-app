import React from 'react'
import { Skeleton } from '@mui/material'

export const Loading: React.FC = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          height: 96,
        }}
      />
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          height: 48,
          mt: 2,
        }}
      />
      {[...Array(12)].map((_value, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
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
