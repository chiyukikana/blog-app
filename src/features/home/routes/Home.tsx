import React from 'react'
import { Grid, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { lazyImport } from '@/utils/lazyImport'
import { Spinner } from '@/components/Elements'
import { Head } from '@/components/Head'

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
              <React.Suspense
                fallback={
                  <Spinner
                    sx={{
                      position: 'relative',
                      height: 191,
                    }}
                  />
                }
              >
                <Outlet />
              </React.Suspense>
            </Grid>
            <Sidebar />
          </Grid>
        </main>
      </Container>
      <Footer />
    </>
  )
}
