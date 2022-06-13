import { Box, Card, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import type { postDetails } from '../interfaces'
import { Post } from '../pages/post/[slug]'
import { PostInfo } from '.'
import getContentFragment from '../helpers/getContentFragment'

const PostContent: FC = () => {
  const post = useContext<postDetails['post']>(Post)

  return (
    <Card sx={{ p: { sm: '2rem' } }} className="post-content">
      <Box className="featured-image">
        <img src={post.featuredImage.url} alt={post.title} />
      </Box>

      <Box sx={{ px: { xs: '2rem', sm: 0 } }}>
        <PostInfo
          authorImg={post.author.photo.url}
          authorName={post.author.name}
          createdAt={post.createdAt}
          sx={{ mb: '1.5rem', justifyContent: 'flex-start' }}
        />

        <Typography variant="h2" className="title">
          {post.title}
        </Typography>

        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, index) =>
            getContentFragment(index, item.text, item, undefined)
          )

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}
      </Box>
    </Card>
  )
}

export default PostContent
