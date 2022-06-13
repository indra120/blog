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
import { CheckCircleRounded, CloseRounded, Telegram } from '@mui/icons-material'
import { Post } from '../../pages/post/[slug]'
import { postDetails } from '../../interfaces'
import style from './style'

const AddComments: FC = () => {
  const { slug } = useContext<postDetails['post']>(Post)

  const [error, setError] = useState<boolean>(false)
  const [showResponseMessage, setShowResponseMessage] = useState<boolean>(false)

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
    })
  }

  const closeDialog = () => setShowResponseMessage(false)

  return (
    <Card sx={style.addComments}>
      <Typography variant="h3" className="widget-title">
        Leave a Reply
      </Typography>

      <TextareaAutosize
        value={comment}
        onChange={(e) => setComment(e.currentTarget.value)}
        minRows={8}
        placeholder="Comment"
        className="text-area"
      />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            type="text"
            label="Name"
            className="text-field"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            type="email"
            label="Email"
            className="text-field"
          />
        </Grid>
      </Grid>

      <FormControlLabel
        className="checkbox"
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
        className="submit-button"
      >
        Submit your comment
      </ActionButton>

      <Dialog
        open={showResponseMessage}
        onClose={closeDialog}
        sx={{
          '.MuiPaper-root': {
            p: '1rem',
            textAlign: 'center',
            borderRadius: '2rem',
          },
        }}
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
