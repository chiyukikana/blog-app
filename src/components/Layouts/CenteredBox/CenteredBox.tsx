import React from 'react'
import { styled, Box as MuiBox } from '@mui/material'

interface IProps {
  children: React.ReactNode
}

export const CenteredBox: React.FC<IProps> = ({ children }) => {
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

  return <StyledMuiBox>{children}</StyledMuiBox>
}
