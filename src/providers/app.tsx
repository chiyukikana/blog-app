import React from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { HashRouter as Router } from 'react-router-dom'

// 组件自身props
interface IProps {
  children: React.ReactNode
}

// 发生错误时渲染的组件
const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  // 显示错误信息
  return (
    <>
      <div>Sorry, something went wrong.</div>
      <code>{error.message}</code>
      <button onClick={resetErrorBoundary}>重新载入</button>
    </>
  )
}

export const AppProvider: React.FC<IProps> = ({ children }) => {
  return (
    // 此处属于开屏加载
    <React.Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>{children}</Router>
      </ErrorBoundary>
    </React.Suspense>
  )
}
