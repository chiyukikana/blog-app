import React from 'react'
import ReactMarkdown, { MarkdownToJSX } from 'markdown-to-jsx'
import { Box, Link as MuiLink, Typography } from '@mui/material'
import { MarkdownProps } from '../types'
import { resolveUrl } from '@/utils/resolveUrl'

const MarkdownListItem: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <Box component="li" sx={{ mt: 1, typography: 'body1' }}>
    {children}
  </Box>
)

const MarkdownCode: React.FC<{
  children: React.ReactNode
}> = ({ children }) => (
  <Box component="code" className="markdown-code">
    {children}
  </Box>
)

const MarkdownLink: React.FC<{
  children: React.ReactNode
  href: string
}> = props => {
  return (
    <MuiLink {...props} href={props.href ? resolveUrl(props.href) : undefined}>
      {props.children}
    </MuiLink>
  )
}

const options: MarkdownToJSX.Options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: 'h3',
        component: 'h1',
        gutterBottom: true,
      },
    },
    h2: {
      component: Typography,
      props: {
        variant: 'h4',
        component: 'h2',
        gutterBottom: true,
      },
    },
    h3: {
      component: Typography,
      props: {
        variant: 'h5',
        component: 'h3',
        gutterBottom: true,
      },
    },
    h4: {
      component: Typography,
      props: {
        variant: 'h6',
        component: 'h4',
        gutterBottom: true,
      },
    },
    p: {
      component: Typography,
      props: {
        paragraph: true,
      },
    },
    a: {
      component: MarkdownLink,
    },
    li: {
      component: MarkdownListItem,
    },
    code: {
      component: MarkdownCode,
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
