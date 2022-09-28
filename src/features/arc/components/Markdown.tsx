import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import { Box, Link as MuiLink, Typography } from '@mui/material'
import { MarkdownProps } from '../types'

const MarkdownListItem: React.FC = () => (
  <Box component="li" sx={{ mt: 1, typography: 'body1' }} />
)

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        component: 'h1',
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', component: 'h2' },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'caption',
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true },
    },
    a: { component: MuiLink },
    li: {
      component: MarkdownListItem,
    },
  },
}

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <ReactMarkdown className="markdown" options={options}>
      {children}
    </ReactMarkdown>
  )
}
