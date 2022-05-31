import type { NextPage } from 'next'
import Head from 'next/head'
import StickyBox from 'react-sticky-box'
import { Container, Grid } from '@mui/material'
import { getPosts } from '../services'
import { posts } from '../interfaces'
import { CategoriesWidget, PostCard, RecommendationWidget } from '../components'

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
            <StickyBox offsetTop={96}>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <RecommendationWidget />
                </Grid>
                <Grid item>
                  <CategoriesWidget />
                </Grid>
              </Grid>
            </StickyBox>
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
