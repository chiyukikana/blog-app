import React from 'react'
import {
  Box,
  Grid,
  Link as MuiLink,
  Paper,
  Skeleton,
  styled,
  Typography,
} from '@mui/material'
import { getMainFeaturedPost } from '../api/getMainFeaturedPost'
import { IMainFeaturedPost } from '../types'

// 遮罩层
const MaskedBox = styled(Box)({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.3)',
  backdropFilter: 'blur(8px)',
})

export const MainFeaturedPost: React.FC = () => {
  // 初始化状态
  const [state, setState] = React.useState<IMainFeaturedPost>()
  // 获取数据
  React.useEffect(() => {
    getMainFeaturedPost().then(resp => setState(resp.data))
  }, [])
  // 渲染组件
  return (
    <Box sx={{ mb: 4 }}>
      {state ? (
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.800',
            color: '#fff',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${state?.bg})`,
          }}
        >
          <MaskedBox />
          <Grid container>
            <Grid item md={6}>
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 6 },
                  pr: { md: 0 },
                }}
              >
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {state?.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {state?.description}
                </Typography>
                <MuiLink
                  variant="subtitle1"
                  color="primary"
                  href={state?.link}
                  target="_blank"
                >
                  继续阅读
                </MuiLink>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Skeleton variant="rectangular" animation="wave" height={460} />
      )}
    </Box>
  )
}
