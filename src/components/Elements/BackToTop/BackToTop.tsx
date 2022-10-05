import React from 'react'
import { Box, Fab, Fade, useScrollTrigger } from '@mui/material'
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material'

interface IProps {
  children: React.ReactElement
}

const ScrollTop: React.FC<IProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 810,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: 'fixed', right: 32, bottom: 32 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

export const BackToTop: React.FC = () => {
  return (
    <ScrollTop>
      <Fab size="medium" color="primary">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  )
}
