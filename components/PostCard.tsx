import { ArrowForwardRounded } from '@mui/icons-material'
import { Box, Card, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'
import type { posts } from '../interfaces'
import { ActionButton, PostInfo } from '.'

const PostCard: FC<{ post: posts[0]['node'] }> = ({ post }) => {
  return (
    <Card sx={{ p: { sm: '2rem' } }} className="post-card">
      <Box className="featured-image">
        <Link href={`/post/${post.slug}`}>
          <img src={post.featuredImage.url} alt={post.title} />
        </Link>
      </Box>

      <Grid container direction="column" className="post-info">
        <Grid item>
          <Typography variant="h2" className="post-title">
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </Typography>
        </Grid>

        <Grid item>
          <PostInfo
            authorImg={post.author.photo.url}
            authorName={post.author.name}
            createdAt={post.createdAt}
          />
        </Grid>

        <Grid item>
          <Typography variant="caption" className="caption">
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
