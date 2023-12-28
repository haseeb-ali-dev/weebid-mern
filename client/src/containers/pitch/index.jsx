import { memo } from 'react'
import {
  CardMedia, Grid, Typography,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'

import {
  PitchBanner, PitchUser, PledgesAndComments, PitchActions,
} from 'components'
import { Loader } from 'layouts'

import { getQuestion } from 'api/question'
import { getMsg } from 'utils/helpers'
import { imageProps, msgProps, pledgedAmountProps } from './props'

const Pitch = () => {
  const { id } = useParams()
  const redirect = useNavigate()
  const {
    isLoading, isError, error, data: pitch,
  } = useQuery({ queryKey: ['question', id], queryFn: () => getQuestion(id), staleTime: 6000 })

  if (isError) {
    if (error.response.data.expired) {
      redirect('/login')
    }
    console.log(getMsg(error))
  }

  return isLoading || isError ? <Loader /> : (
    <Grid container>
      <Grid container spacing={2} sx={{ px: 8, my: 5 }}>
        <Grid item md={6}>
          <CardMedia {...imageProps(pitch.receiver.avatar)} />
        </Grid>
        <Grid item md={6}>
          <PitchUser sender={pitch.sender} receiver={pitch.receiver} total={pitch.totalPledges} />
          <Typography {...msgProps}>{pitch.message}</Typography>
          <Typography {...pledgedAmountProps}>${new Intl.NumberFormat().format(pitch.totalPledged)} USD Pledged</Typography>
          <PitchActions id={id} pledge={pitch.userPledge[0]} />
        </Grid>
      </Grid>
      <PitchBanner />
      <PledgesAndComments pledges={pitch.pledges} pitchBy={pitch.sender} total={pitch.totalPledges} id={id} />
    </Grid>
  )
}

export default memo(Pitch)
