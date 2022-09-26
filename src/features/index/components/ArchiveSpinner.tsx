import React from 'react'
import { Spinner } from '../../../components/Elements'

export const ArchiveSpinner: React.FC = () => {
  return (
    <Spinner
      sx={{
        position: 'relative',
        height: 191,
      }}
    />
  )
}
