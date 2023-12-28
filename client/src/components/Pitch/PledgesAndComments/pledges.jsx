import { memo, useState } from 'react'
import {
  Box, Stack, Avatar, Typography, Button,
} from '@mui/material'
import { useQuery } from 'react-query'

import { Loader } from 'layouts'

import { questionPledges } from 'api/bid'
import { getContributerEmoji, getOrdinal } from 'utils/helpers'
import { moreBtnProps } from './props'

const Pledges = ({
  pledges, pitchBy, total, questionId,
}) => {
  const [fetchedPledges, setFetchedPledges] = useState(pledges)
  const [page, setPage] = useState(2)
  const hasMore = fetchedPledges.length < total
  const remaining = total - fetchedPledges.length

  const {
    isLoading, isError, error, data, refetch,
  } = useQuery({
    queryKey: ['pledges', page, questionId],
    queryFn: () => questionPledges(questionId, page),
    staleTime: 6000,
    manual: true,
    keepPreviousData: true,
  })

  const handleClick = () => {
    refetch().then(() => {
      setFetchedPledges(prevData => [...prevData, ...data.bids])
      setPage(page + 1)
    })
  }

  if (isError) console.log(error)

  return (
    <Box p={2}>
      <Stack spacing={4}>
        <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
          <Avatar alt='Profile' src={pitchBy.avatar} sx={{ width: 64, height: 64 }} />
          <Stack>
            <Typography variant='h6' color='white' fontWeight={700}>
              {pitchBy.name}
            </Typography>
            <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
              🏆 Started this pith
            </Typography>
          </Stack>
        </Box>
        {isLoading ? <Loader /> : fetchedPledges.map((pledge, index) => (
          <Box sx={{ display: 'flex', mt: 2, gap: 3 }} key={index}>
            <Avatar alt='Profile' src={pledge.user.avatar} sx={{ width: 64, height: 64 }} />
            <Stack>
              <Typography variant='h6' color='white' fontWeight={700}>
                Pledged ${pledge.cents}
              </Typography>
              <Typography variant='h6' color='#7b7b7b' fontWeight={100}>
                {getContributerEmoji(index + 1)} {getOrdinal(index + 1)} place contributer
              </Typography>
            </Stack>
          </Box>
        ))}
        <Box sx={{ display: 'flex', mt: 2, gap: 3 }}>
          {hasMore ? <Button onClick={handleClick} {...moreBtnProps}>See More Pledges({remaining})</Button> : null}
        </Box>
      </Stack>
    </Box>
  )
}

export default memo(Pledges)
