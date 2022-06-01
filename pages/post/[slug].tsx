import { Container, Grid } from '@mui/material'
import React, { createContext } from 'react'
import { PostContent } from '../../components'
import { postDetails } from '../../interfaces'
import { Sidebar } from '../../sections'
import { getPostDetails, getPosts } from '../../services'

export const Post = createContext<any>({})

const PostDetailsPage: React.FC<postDetails> = ({ post }) => {
  return (
    <Container>
      <Grid container sx={{ mt: '2.5rem' }} spacing={4}>
        <Grid item md={8}>
          <Post.Provider value={post}>
            <PostContent />
          </Post.Provider>
        </Grid>
        <Grid item md={4}>
          <Sidebar
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default PostDetailsPage

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const data = await getPostDetails(params.slug)

  return {
    props: {
      post: data,
    },
  }
}

export const getStaticPaths = async () => {
  const posts: { node: { slug: string } }[] = await getPosts()

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  }
}
