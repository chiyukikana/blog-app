import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '../config/theme'
import { ErrorFallback } from '../components/Providers'
import { Spinner } from '../components/Elements'

interface IProps {
  children: React.ReactNode
}

export const AppProvider: React.FC<IProps> = ({ children }) => {
  return (
    <React.Suspense fallback={<Spinner />}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router>{children}</Router>
          </ErrorBoundary>
        </CssBaseline>
      </ThemeProvider>
    </React.Suspense>
  )
}
