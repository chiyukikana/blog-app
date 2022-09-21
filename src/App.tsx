import React from 'react'
import { AppProvider } from './providers/app'
import { AppRoutes } from './routes'

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}

export default App
