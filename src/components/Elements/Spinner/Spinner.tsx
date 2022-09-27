import React from 'react'
import { CircularProgress, SxProps } from '@mui/material'
import { CenteredBox } from '@/components/Layouts'

interface IProps {
  sx?: SxProps
}

export const Spinner: React.FC<IProps> = ({ sx }) => {
  return (
    <CenteredBox sx={sx}>
      <CircularProgress />
    </CenteredBox>
  )
}
