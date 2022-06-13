import { Card, Box, Typography } from '@mui/material'
import moment from 'moment'
import Link from 'next/link'
import { FC, useState, useEffect } from 'react'
import type { recommendationWidget, relatedPosts } from '../../interfaces'
import { getRecentPosts, getSimilarPosts } from '../../services'
import style from './style'

const RecommendationWidget: FC<recommendationWidget> = ({
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
    <Card sx={style.recommendationWidget}>
      <Typography variant="h3" className="widget-title">
        {slug ? 'Related Posts' : 'Recently Added'}
      </Typography>

      <Box className="posts">
        {relatedPosts.map((post) => (
          <Link key={post.title} href={`/post/${post.slug}`}>
            <Card className="recommendation">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="image"
              />

              <Box className="info">
                <Typography className="date">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </Typography>
                <Typography className="title">
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
