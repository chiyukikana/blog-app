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
                if (url.startsWith('http:')) {
                  // 在多级目录下/aa/bb/部署
                  return url
                    .split('/')
                    .filter(item => item !== '')
                    .slice(2)
                    .join('/')
                }
                // 在根目录/部署
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
