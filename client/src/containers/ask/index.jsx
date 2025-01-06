import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import {
  Box, Typography, TextField, Button,
} from '@mui/material'

import { PitchBadge } from 'components'

import { id } from 'utils/helpers'
import { createQuestion } from 'api/question'

import {
  mainBoxProps, pitchTextareaProps, sendPitchBtnProps,
  whatsYourPitchProps, pitchForProps, influencerNameProps,
} from './props'

const Ask = () => {
  const redirect = useNavigate()
  const { id: receiverId } = useParams()
  const { state: { name, avatar } } = useLocation()
  const [message, setMessage] = useState('')
  const senderId = id()

  const handleClick = async () => {
    const { status, msg, data } = await createQuestion(message, receiverId, senderId)
    if (status === 'error') {
      console.log(status, msg, data)
    } else {
      redirect(`/user/${receiverId}`)
    }
  }
  const handleChange = e => setMessage(e.target.value)

  return (
    <Box {...mainBoxProps}>
      <Typography {...whatsYourPitchProps}>What`s your pitch?</Typography>
      <PitchBadge img={avatar} />
      <Typography {...pitchForProps}>Pitch for<Typography {...influencerNameProps}>{name}</Typography></Typography>
      <TextField {...pitchTextareaProps} defaultValue={message} onChange={handleChange} />
      <Button {...sendPitchBtnProps} onClick={handleClick}>Send Pitch</Button>
    </Box>
  )
}

export default Ask
