import React from 'react'
import { CircularProgress } from '@mui/material'
import { CenteredBox } from '../../Layouts'

interface SpinnerProps {
  auto?: boolean
}

export const Spinner: React.FC<SpinnerProps> = ({ auto }) => {
  return (
    <CenteredBox>
      <CircularProgress />
    </CenteredBox>
  )
}
