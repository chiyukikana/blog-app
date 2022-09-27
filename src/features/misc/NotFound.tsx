import React from 'react'
import { CenteredBox } from '../../components/Layouts'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { Home as HomeIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'

export const NotFound: React.FC = () => {
  return (
    <CenteredBox>
      <Box textAlign="center">
        <Stack
          direction="row"
          spacing={3}
          divider={<Divider orientation="vertical" flexItem />}
          height={40}
          alignItems="center"
        >
          <Typography variant="h5" fontWeight="bold">
            404
          </Typography>
          <Typography variant="subtitle1" fontWeight="normal">
            访问的页面不存在
          </Typography>
        </Stack>
        <Button
          variant="contained"
          sx={{ mt: 8 }}
          startIcon={<HomeIcon />}
          component={Link}
          to="/"
        >
          返回首页
        </Button>
      </Box>
    </CenteredBox>
  )
}
