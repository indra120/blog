import { DateRange } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import { FC } from 'react'

const PostInfo: FC<{
  authorImg: string
  authorName: string
  createdAt: string
  sx?: object
}> = ({ authorImg, authorName, createdAt, sx }) => {
  return (
    <Grid container justifyContent="center" sx={{ gap: '1rem', ...sx }}>
      <Grid item>
        <Grid container sx={{ gap: '0.5rem' }}>
          <Grid item>
            <Image src={authorImg} alt={authorName} width={32} height={32} />
          </Grid>

          <Grid item>
            <Typography variant="subtitle1">{authorName}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container sx={{ gap: '0.5rem' }}>
          <Grid item>
            <DateRange sx={{ fill: '#f57342' }} />
          </Grid>

          <Grid item>
            <Typography variant="subtitle1">
              {moment(createdAt).format('MMM DD,YYYY')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PostInfo
