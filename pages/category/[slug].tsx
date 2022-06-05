import { Container, Grid } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { PostCard } from '../../components'
import type { category } from '../../interfaces'
import { Sidebar } from '../../sections'
import { getCategories, getCategory } from '../../services'

const CategoryPage: NextPage<category> = ({ posts, title }) => {
  return (
    <>
      <Head>
        <title>{title && `Category | ${title}`}</title>
      </Head>

      <Container>
        <Grid container sx={{ mt: '2.5rem' }} spacing={4}>
          <Grid item xs={12} md={8}>
            {posts.map((post, i) => (
              <PostCard key={i} post={post.node} />
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

export default CategoryPage

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const posts = await getCategory(params.slug)

  return {
    props: { posts, title: params.slug },
  }
}

export const getStaticPaths = async () => {
  const categories: { slug: string }[] = await getCategories()

  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  }
}
