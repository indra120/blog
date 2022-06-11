import {
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import { FC, useContext, useEffect, useState } from 'react'
import { submitComment } from '../../services'
import { ActionButton } from '..'
import style from './AddComments.module.scss'
import { CheckCircleRounded, CloseRounded, Telegram } from '@mui/icons-material'
import { Post } from '../../pages/post/[slug]'
import { postDetails } from '../../interfaces'

const AddComments: FC = () => {
  const { slug } = useContext<postDetails['post']>(Post)

  const [error, setError] = useState<boolean>(false)
  const [showResponseMessage, setShowResponseMessage] = useState<boolean>(false)
  const [dialog, setDialog] = useState<boolean>(false)

  const [comment, setComment] = useState<string>('')
  const [email, setEmail] = useState<string | null>('')
  const [name, setName] = useState<string | null>('')
  const [storeData, setStoreData] = useState<boolean>(false)

  useEffect(() => {
    setEmail(window.localStorage.getItem('email'))
    setName(window.localStorage.getItem('name'))
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    if (!comment || !email || !name) {
      setError(true)
      return
    }

    if (storeData === true) {
      window.localStorage.setItem('email', email)
      window.localStorage.setItem('name', name)
    } else {
      window.localStorage.removeItem('email')
      window.localStorage.removeItem('name')
    }

    submitComment({
      comment,
      email,
      name,
      slug,
    }).then((res) => {
      setShowResponseMessage(true)
      setTimeout(() => {
        setShowResponseMessage(false)
      }, 3000)
    })

    setDialog(true)
  }

  const closeDialog = () => setDialog(false)

  return (
    <Card className={style['card']}>
      <Typography variant="h3" className={style['widget-title']}>
        Leave a Reply
      </Typography>

      <TextareaAutosize
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
        minRows={8}
        placeholder="Comment"
        className={style['text-area']}
      />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            label="Name"
            className={style['text-field']}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            label="Email"
            className={style['text-field']}
          />
        </Grid>
      </Grid>

      <FormControlLabel
        className={style['checkbox']}
        control={
          <Checkbox
            checked={storeData}
            onChange={() => setStoreData((prev) => !prev)}
          />
        }
        label="Remember me"
      />

      <ActionButton
        Icon={Telegram}
        onClick={handleCommentSubmission}
        className={style['submit-button']}
      >
        Submit your comment
      </ActionButton>

      <Dialog
        open={dialog}
        onClose={closeDialog}
        sx={{
          '.MuiPaper-root': {
            p: '1rem',
            textAlign: 'center',
            borderRadius: '2rem',
          },
        }}
        className={style['submit-alert']}
      >
        <DialogContent sx={{ p: '0px' }}>
          <CheckCircleRounded
            sx={{ fontSize: { xs: '7rem', sm: '10rem' }, fill: '#f57342' }}
          />
        </DialogContent>

        <DialogTitle sx={{ color: '#f57342' }}>
          Comment submitted for review
        </DialogTitle>

        <DialogActions>
          <ActionButton Icon={CloseRounded} onClick={closeDialog}>
            Close
          </ActionButton>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default AddComments
