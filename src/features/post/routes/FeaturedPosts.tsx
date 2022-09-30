import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material'
import { getFeaturedPosts } from '../api/getFeaturedPosts'
import { FeaturedPostProps } from '../types'

export const FeaturedPosts: React.FC = () => {
  // 初始化状态
  const [state, setState] = React.useState<FeaturedPostProps[]>()
  // 获取数据
  React.useEffect(() => {
    getFeaturedPosts().then(res => setState(() => res.data))
  }, [])
  // 渲染组件
  return (
    <Grid container spacing={4}>
      {state ? (
        state.map(({ title, description, link, bg, date }, index) => {
          return (
            <Grid item xs={12} md={6} key={index}>
              <CardActionArea component="a" href={link} target="_blank">
                <Card sx={{ display: 'flex' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      继续阅读
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={bg}
                  />
                </Card>
              </CardActionArea>
            </Grid>
          )
        })
      ) : (
        <>
          {[...Array(2)].map((_value, index) => {
            return (
              <Grid item xs={12} md={6} key={index}>
                <Skeleton variant="rounded" animation="wave" height={192} />
              </Grid>
            )
          })}
        </>
      )}
    </Grid>
  )
}
