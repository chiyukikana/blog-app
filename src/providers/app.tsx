import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { APP_NAME, theme } from '../config'
import { ErrorFallback, Spinner } from '../components/Elements'
import { Helmet, HelmetProvider } from 'react-helmet-async'

interface IProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<IProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <HelmetProvider>
              <Helmet>
                <title>{APP_NAME}</title>
              </Helmet>
              <Router>{children}</Router>
            </HelmetProvider>
          </CssBaseline>
        </ThemeProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}
