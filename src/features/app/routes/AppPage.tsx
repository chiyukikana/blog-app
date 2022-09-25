import React from 'react'
import { Grid, Container } from '@mui/material'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { lazyImport } from '../../../utils/lazyImport'

const { MainFeaturedPost } = lazyImport(
  () => import('../../featured'),
  'MainFeaturedPost'
)
const { FeaturedPosts } = lazyImport(
  () => import('../../featured'),
  'FeaturedPosts'
)

const posts = [
  '# Hello World\n DevOps?',
  '# Hello World\n DevOps?',
  '# Hello World\n DevOps?',
  '# Hello World\n DevOps?',
]

export const AppPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost />
          <FeaturedPosts />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="最新内容" posts={posts} />
            <Sidebar />
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  )
}
