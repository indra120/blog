import { Card, Typography } from '@mui/material'
import { FC, useContext, useEffect, useState } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../../services'
import type { comments, postDetails } from '../../interfaces'
import { Post } from '../../pages/post/[slug]'
import style from './Comments.module.scss'

const Comments: FC = () => {
  const { slug } = useContext<postDetails['post']>(Post)
  const [comments, setComments] = useState<comments>([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <Card className={style['card']}>
          <Typography className={style['widget-title']}>
            {comments.length} Comment{comments.length > 1 ? 's' : ''}
          </Typography>

          {comments.map((comment, i) => (
            <Card key={i} className={style['card']}>
              <Typography className={style['comment-author']}>
                <span>{comment.name}</span>
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </Typography>

              <Typography variant="caption" fontSize="1rem" fontWeight={300}>
                {parse(comment.comment)}
              </Typography>
            </Card>
          ))}
        </Card>
      )}
    </>
  )
}

export default Comments
