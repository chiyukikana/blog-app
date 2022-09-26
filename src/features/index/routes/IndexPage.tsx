import React from 'react'
import { Grid, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { lazyImport } from '../../../utils/lazyImport'
import { ArchiveSpinner } from '../components/ArchiveSpinner'

const { MainFeaturedPost } = lazyImport(
  () => import('../../featured'),
  'MainFeaturedPost'
)
const { FeaturedPosts } = lazyImport(
  () => import('../../featured'),
  'FeaturedPosts'
)

export const IndexPage: React.FC = () => {
  return (
    <>
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
              <React.Suspense fallback={<ArchiveSpinner />}>
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
