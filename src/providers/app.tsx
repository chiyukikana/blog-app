import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BASE_URL, theme } from '../config'
import { ErrorFallback, Spinner } from '../components/Elements'

interface IProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<IProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router
              basename={(url => {
                // BASE_URL环境变量如果是多路径下部署为http开头
                if (url.startsWith('http')) {
                  // 删除http://前缀和域名地址，只留下/根路径。
                  return '/' + url.split('/').slice(3).join('/')
                }
                // 在根目录部署
                return '/'
              })(BASE_URL)}
            >
              {children}
            </Router>
          </ErrorBoundary>
        </CssBaseline>
      </ThemeProvider>
    </React.Suspense>
  )
}
