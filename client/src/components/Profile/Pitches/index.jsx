import { useState, memo, useEffect } from 'react'
import { Grid } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import FullfilledPitch from 'components/Pitches/Fulfilled'
import ActivePitch from 'components/Pitches/Active'
import Placeholder from 'components/Placeholder'

import { profileQuestions } from 'api/question'
import { PitchesTabs, Skeleton } from 'layouts'
import { useRecoilState } from 'recoil'
import { profilePitchesAtom } from 'atoms'

const ProfilePitches = ({ pitches, id }) => {
  const [activePitches, setActivePitches] = useRecoilState(profilePitchesAtom)
  const [page, setPage] = useState(2)
  const [dLength, setDLength] = useState(8)
  const [more, setMore] = useState(true)

  const fetchUserQuestions = async () => {
    const { data, count } = await profileQuestions(id, page)
    setActivePitches(prevData => [...prevData, ...data])
    setPage(page + 1)
    setMore(activePitches.length < count)
    setDLength(prevLen => prevLen + 8)
  }

  useEffect(() => {
    setActivePitches(pitches)
  }, [pitches])

  return (
    <PitchesTabs
      activeTab={activePitches.length > 0 ? (
        <InfiniteScroll
          dataLength={dLength}
          next={fetchUserQuestions}
          hasMore={more}
          loader={activePitches.length > 8 && <Skeleton />}
        >
          <Grid container spacing={1}>
            {activePitches?.map(pitch => (
              <Grid item xs={12} sm={6} md={3} key={pitch.id}>
                <ActivePitch pitch={pitch} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : <Placeholder />}
      fulfilledTab={
        <Grid container spacing={1}>
          {pitches?.map(pitch => (
            <Grid item xs={12} sm={6} md={3} key={pitch.id}>
              <FullfilledPitch pitch={pitch} charity />
            </Grid>
          ))}
        </Grid>
      }
    />
  )
}

export default memo(ProfilePitches)
