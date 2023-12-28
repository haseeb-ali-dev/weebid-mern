import { useRecoilState } from 'recoil'
import {
  useState, useEffect, memo, useRef,
} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Grid } from '@mui/material'

import { Skeleton, PitchesTabs } from 'layouts'
import FullfilledPitch from 'components/Pitches/Fulfilled'
import ActivePitch from 'components/Pitches/Active'
import Placeholder from 'components/Placeholder'

import { allQuestions } from 'api/question'
import { homePitchesAtom } from 'atoms'

const HomePitches = () => {
  const [pitches, setPitches] = useRecoilState(homePitchesAtom)
  const [page, setPage] = useState(1)
  const [more, setMore] = useState(true)
  const [dlength, setDlength] = useState(8)
  const dataFetchedRef = useRef(false)

  const fetchQuestions = async () => {
    const { data, count } = await allQuestions(page)
    setPitches(prevData => [...prevData, ...data])
    setDlength(prevLen => prevLen + 8)
    setPage(page + 1)
    setMore(pitches.length < count)
  }

  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    fetchQuestions()
  }, [])

  return (
    <PitchesTabs
      activeTab={pitches.length > 0 ? (
        <InfiniteScroll
          dataLength={dlength}
          next={fetchQuestions}
          hasMore={more}
          loader={<Skeleton gap={3} />}
        >
          <Grid container spacing={2}>
            {pitches.map(pitch => (
              <Grid item xs={12} sm={6} md={3} key={pitch.id}>
                <ActivePitch pitch={pitch} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>)
        : <Placeholder />}
      fulfilledTab={
        <Grid container spacing={1}>
          {pitches.map(pitch => (
            <Grid item xs={12} sm={6} md={3} key={pitch.id}>
              <FullfilledPitch pitch={pitch} charity />
            </Grid>
          ))}
        </Grid>
      }
    />
  )
}

export default memo(HomePitches)
