import { Card, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useContext } from 'react'
import type { postDetails } from '../../interfaces'
import { Post } from '../../pages/post/[slug]'
import style from './Author.module.scss'

const Author: React.FC = () => {
  const { author } = useContext<postDetails['post']>(Post)

  return (
    <Card className={style['card']}>
      <Grid container className={style['grid']}>
        <Grid item>
          <Image
            src={author.photo.url}
            alt={author.name}
            width={80}
            height={80}
            objectFit="cover"
          />
        </Grid>
        <Grid item className={style['author']}>
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
