import { ArrowForwardRounded, DateRange } from '@mui/icons-material'
import { Box, Card, Grid, Typography } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { posts } from '../../interfaces'
import ActionButton from '../ActionButton'
import style from './PostCard.module.scss'

const PostCard: React.FC<{ post: posts[0]['node'] }> = ({ post }) => {
  return (
    <Card sx={{ p: { sm: '2rem' } }} className={style['card']}>
      <Box className={style['featured-image']}>
        <img src={post.featuredImage.url} alt={post.title} />
      </Box>

      <Grid container direction="column" className={style['post-info']}>
        <Grid item>
          <Typography variant="h2" className={style['post-title']}>
            {post.title}
          </Typography>
        </Grid>

        <Grid item>
          <Grid container justifyContent="center" sx={{ gap: '1rem' }}>
            <Grid item>
              <Grid container sx={{ gap: '0.5rem' }}>
                <Grid item>
                  <Image
                    src={post.author.photo.url}
                    alt={post.author.name}
                    width={32}
                    height={32}
                  />
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1">
                    {post.author.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid container sx={{ gap: '0.5rem' }}>
                <Grid item>
                  <DateRange className={style['date-icon']} />
                </Grid>

                <Grid item>
                  <Typography variant="subtitle1">
                    {moment(post.createdAt).format('MMM DD,YYYY')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="caption" className={style['caption']}>
            {post.exerpt}
          </Typography>
        </Grid>

        <Grid item>
          <ActionButton Icon={ArrowForwardRounded}>
            <Link href={`/post/${post.slug}`}>Read More</Link>
          </ActionButton>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PostCard
