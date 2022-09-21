import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>App</h1>
            <Outlet />
          </div>
        }
      >
        <Route
          path="/"
          element={
            <div>
              <h2>Dashboard</h2>
            </div>
          }
        ></Route>
      </Route>
    </Routes>
  )
}
