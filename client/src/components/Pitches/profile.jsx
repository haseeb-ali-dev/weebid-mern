import { useState, memo, useEffect } from 'react'
import {
  Box, Tab, Tabs, Grid,
} from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import FullfilledPitch from './fullfilled'
import ActivePitch from './active'
import { tabsProps } from './props'

import { profileQuestions } from 'api/question'
import { Skeleton } from 'layouts'
import Placeholder from './placeholder'

const ProfilePitches = ({ pitches, id }) => {
  const [tabIndex, setTabIndex] = useState(0)
  const [page, setPage] = useState(2)
  const [more, setMore] = useState(true)
  const [activePitches, setActivePitches] = useState([])

  const handleTabChange = (event, newTabIndex) => setTabIndex(newTabIndex)

  const fetchUserQuestions = async () => {
    const { data, count } = await profileQuestions(id, page)
    setActivePitches(prevData => [...prevData, ...data])
    setPage(page + 1)
    setMore(activePitches.length < count)
  }

  useEffect(() => {
    setActivePitches(pitches)
  }, [pitches])

  return (
    <Box>
      <Box>
        <Tabs {...tabsProps(tabIndex)} onChange={handleTabChange}>
          <Tab label='Active Pitches' />
          <Tab label='Fulfilled Pitches' />
        </Tabs>
      </Box>
      <Box sx={{ pt: 3 }}>
        {(tabIndex === 0 && activePitches.length > 0) ? (
          <InfiniteScroll
            dataLength={activePitches.length}
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
        {tabIndex === 1 && (
          <Grid container spacing={1}>
            {pitches?.map(pitch => (
              <Grid item xs={12} sm={6} md={3} key={pitch.id}>
                <FullfilledPitch pitch={pitch} charity />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  )
}

export default memo(ProfilePitches)
