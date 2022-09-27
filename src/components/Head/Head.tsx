import React from 'react'
import { APP_NAME } from '../../config'
import { Helmet } from 'react-helmet-async'

interface IProps {
  title?: string
  children?: React.ReactNode
}

export const Head: React.FC<IProps> = ({ title, children }) => {
  return (
    <Helmet
      title={title ? `${title} | ${APP_NAME}` : undefined}
      defaultTitle={APP_NAME}
    >
      {children}
    </Helmet>
  )
}
