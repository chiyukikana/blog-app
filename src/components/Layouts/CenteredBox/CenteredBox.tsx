import React from 'react'
import { styled, Box as MuiBox, SxProps } from '@mui/material'

interface IProps {
  children: React.ReactNode
  sx?: SxProps
}

export const CenteredBox: React.FC<IProps> = ({ children, sx }) => {
  const StyledMuiBox = styled(MuiBox)({
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })

  return <StyledMuiBox sx={sx}>{children}</StyledMuiBox>
}
