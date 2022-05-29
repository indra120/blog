import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Grid } from '@mui/material'
import { getPosts } from '../services'
import { posts } from '../interfaces'
import { PostCard } from '../components'

const Home: NextPage<{ posts: posts }> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Ryzenix Blog</title>
        <meta name="description" content="A blog page of Ryzenix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Grid container sx={{ mt: '3rem' }}>
          <Grid item md={8}>
            {posts.map((post) => (
              <PostCard key={post.node.title} post={post.node} />
            ))}
          </Grid>
          <Grid item md={4}></Grid>
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
