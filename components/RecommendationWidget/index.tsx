import { Card, Box, Grid, Typography } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { recommendationWidget, relatedPosts } from '../../interfaces'
import { getRecentPosts, getSimilarPosts } from '../../services'
import style from './RecommendationWidget.module.scss'

const RecommendationWidget: React.FC<recommendationWidget> = ({
  categories,
  slug,
}) => {
  const [relatedPosts, setRelatedPosts] = useState<relatedPosts>([])

  useEffect(() => {
    if (slug)
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      )

    getRecentPosts().then((result) => setRelatedPosts(result))
  }, [slug])

  return (
    <Card className={style['card']}>
      <Typography variant="h3" className={style['widget-title']}>
        {slug ? 'Related Posts' : 'Recently Added'}
      </Typography>

      <Box className={style['posts']}>
        {relatedPosts.map((post) => (
          <Link key={post.title} href={`/post/${post.slug}`}>
            <Card className={style['card-item']}>
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className={style['image']}
              />

              <Box className={style['info']}>
                <Typography className={style['date']}>
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </Typography>
                <Typography className={style['title']}>
                  <Link href={`/post/${post.slug}`}>{post.title}</Link>
                </Typography>
              </Box>
            </Card>
          </Link>
        ))}
      </Box>
    </Card>
  )
}

export default RecommendationWidget
