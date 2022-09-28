import React from 'react'
import { Grid, Container } from '@mui/material'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { Preview } from '../components/Preview'
import { Head } from '@/components/Head'
import { lazyImport } from '@/utils/lazyImport'

const { MainFeaturedPost } = lazyImport(
  () => import('@/features/post'),
  'MainFeaturedPost'
)
const { FeaturedPosts } = lazyImport(
  () => import('@/features/post'),
  'FeaturedPosts'
)

export const Home: React.FC = () => {
  return (
    <>
      <Head />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost />
          <FeaturedPosts />
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                '& .markdown': {
                  py: 3,
                },
              }}
            >
              <Preview />
            </Grid>
            <Sidebar />
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  )
}
