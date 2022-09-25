import React from 'react'
import { Box, Grid, Link, Paper, Typography } from '@mui/material'

export const MainFeaturedPost: React.FC = () => {
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(./images/640.jpg)`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
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
              2022年浙江省技工院校网站设计与开发技能竞赛
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              6月30日，历时三天的2022年浙江省技工院校学生网站设计与开发技能竞赛在绍兴技师学院圆满结束。绍兴市人力资源和社保局职业能力建设处处长吴奇昊，绍兴技师学院院长盛锡红，浙江省职业技能教学研究所教研员殷志艳及浙江省技工院校计算机教研组大组长沈月孟等出席闭幕式。
            </Typography>
            <Link
              variant="subtitle1"
              href="https://mp.weixin.qq.com/s/a7Yfhvau8aaEpaue4yBszA"
              target="_blank"
            >
              继续阅读
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
