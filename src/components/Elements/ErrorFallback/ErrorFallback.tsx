import React from 'react'
import { FallbackProps } from 'react-error-boundary'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { Replay as ReplayIcon } from '@mui/icons-material'

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Dialog open={true}>
      <DialogTitle>发生错误</DialogTitle>
      <DialogContent>
        <DialogContentText>错误信息：</DialogContentText>
        <DialogContentText>{error.message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={resetErrorBoundary}
          startIcon={<ReplayIcon />}
        >
          重新加载
        </Button>
      </DialogActions>
    </Dialog>
  )
}
