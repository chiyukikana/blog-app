import React from 'react'
import { Box, Container, Link, Typography } from '@mui/material'
import { FooterProps } from '../types'

const Copyright: React.FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://github.com/chiyukikana"
        target="_blank"
      >
        chiyukikana
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export const Footer: React.FC<FooterProps> = ({ description, title }) => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  )
}
