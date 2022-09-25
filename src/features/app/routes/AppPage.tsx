import React from 'react'
import { Grid, Container } from '@mui/material'
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material'

import { Header } from '../components/Header'
import { MainFeaturedPost } from '../components/FeaturedPost'
import { FeaturedPost } from '../components/FeaturedPost'
import { Main } from '../components/Main'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'

const sections = [
  { title: 'Facebook', url: 'https://www.facebook.com/chiyukikana' },
  { title: 'GitHub', url: 'https://github.com/chiyukikana' },
  { title: 'Portainer', url: 'http://120.27.231.36:9000' },
  { title: 'Twitter', url: 'https://twitter.com/chiyukikana' },
]

const featuredPosts = [
  {
    title: 'Star Battle',
    date: '9月21日',
    description: '省赛项目已开源，欢迎PR和star。',
    image: './images/logo.png',
    imageLabel: 'Image Text',
  },
  {
    title: 'Sky Angel',
    date: '9月21日',
    description: '19年省赛的项目。',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
]

const posts = ['# Hello World', '## WC']

const sidebar = {
  title: '关于',
  description:
    '本项目基于React18和Material UI开发，使用Vite构建。利用markdown-to-jsx将Markdown语法转换为对应的MUI组件。',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}

export const AppPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header title="千秋花的博客" sections={sections} />
        <main>
          <MainFeaturedPost />
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  )
}
