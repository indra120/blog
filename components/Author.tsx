import { Card, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { FC, useContext } from 'react'
import type { postDetails } from '../interfaces'
import { Post } from '../pages/post/[slug]'

const Author: FC = () => {
  const { author } = useContext<postDetails['post']>(Post)

  return (
    <Card className="author">
      <Grid container className="grid">
        <Grid item>
          <Image
            src={author.photo.url}
            alt={author.name}
            width={80}
            height={80}
            objectFit="cover"
          />
        </Grid>
        <Grid item className="info">
          <Typography variant="h4" fontSize="1.5rem" fontWeight={600}>
            {author.name}
          </Typography>
          <Typography variant="body1">
            <q>{author.bio}</q>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Author
