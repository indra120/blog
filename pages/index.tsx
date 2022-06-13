import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Grid } from '@mui/material'
import { getPosts } from '../services'
import { posts } from '../interfaces'
import { PostCard } from '../components'
import { Sidebar } from '../sections'

const Home: NextPage<{ posts: posts }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Ryzenix Blog</title>
        <meta name="description" content="A blog page of Ryzenix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid container sx={{ mt: '2.5rem' }} spacing={4}>
          <Grid item xs={12} md={8}>
            {posts.map((post) => (
              <PostCard key={post.node.title} post={post.node} />
            ))}
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </>
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
