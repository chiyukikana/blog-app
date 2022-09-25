import React from 'react'
import { Divider, Grid, Typography } from '@mui/material'
import { Markdown } from './Markdown'
import { IMain } from '../types'

export const Main: React.FC<IMain> = ({ posts, title }) => {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <Markdown key={index}>{post}</Markdown>
      ))}
    </Grid>
  )
}
