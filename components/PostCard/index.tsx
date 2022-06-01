import { ArrowForwardRounded } from '@mui/icons-material'
import { Box, Card, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { posts } from '../../interfaces'
import ActionButton from '../ActionButton'
import {PostInfo} from '..'
import style from './PostCard.module.scss'

const PostCard: React.FC<{ post: posts[0]['node'] }> = ({ post }) => {
  return (
    <Card sx={{ p: { sm: '2rem' } }} className={style['card']}>
      <Box className={style['featured-image']}>
        <Link href={`/post/${post.slug}`}>
          <img src={post.featuredImage.url} alt={post.title} />
        </Link>
      </Box>

      <Grid container direction="column" className={style['post-info']}>
        <Grid item>
          <Typography variant="h2" className={style['post-title']}>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </Typography>
        </Grid>

        <Grid item>
          <PostInfo authorImg={post.author.photo.url} authorName={post.author.name} createdAt={post.createdAt} />
        </Grid>

        <Grid item>
          <Typography variant="caption" className={style['caption']}>
            {post.exerpt}
          </Typography>
        </Grid>

        <Grid item>
          <Link href={`/post/${post.slug}`}>
            <ActionButton Icon={ArrowForwardRounded}>Read More</ActionButton>
          </Link>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PostCard
