import { Container, Grid } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import React, { createContext } from 'react'
import { AddComments, Author, Comments, PostContent } from '../../components'
import { postDetails } from '../../interfaces'
import { Sidebar } from '../../sections'
import { getPostDetails, getPosts } from '../../services'

export const Post = createContext<any>({})

const PostDetailsPage: NextPage<postDetails> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title && `${post.title} | Ryzenix Blog`}</title>
        <meta name="description" content={post.exerpt} />
      </Head>

      <Container>
        <Grid container sx={{ mt: '2.5rem' }} spacing={4}>
          <Grid item xs={12} md={8}>
            <Post.Provider value={post}>
              <PostContent />
              <Author />
              <AddComments />
              <Comments />
            </Post.Provider>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Sidebar
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
          </Grid>
        </Grid>
      </Container>
    </>
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
