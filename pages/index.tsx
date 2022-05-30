import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Grid } from '@mui/material'
import { getPosts } from '../services'
import { posts } from '../interfaces'
import { PostCard, RecommendationWidget } from '../components'

const Home: NextPage<{ posts: posts }> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Ryzenix Blog</title>
        <meta name="description" content="A blog page of Ryzenix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container sx={{ mt: '2.5rem' }} spacing={4}>
          <Grid item md={8}>
            {posts.map((post) => (
              <PostCard key={post.node.title} post={post.node} />
            ))}
          </Grid>
          <Grid item md={4}>
            <Box>
              <RecommendationWidget />
            </Box>
          </Grid>
        </Grid>
      </main>
    </Container>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts,
    },
  }
}
