import { useState, memo } from 'react'
import { Box, Tab, Tabs } from '@mui/material'

import { tabsProps } from './props'

const PitchesTabs = ({ activeTab, fulfilledTab }) => {
  const [tabIndex, setTabIndex] = useState(0)

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex)
  }

  return (
    <Box>
      <Box>
        <Tabs {...tabsProps(tabIndex)} onChange={handleTabChange}>
          <Tab label='Active Pitches' />
          <Tab label='Fulfilled Pitches' />
        </Tabs>
      </Box>
      <Box sx={{ pt: 3 }}>
        {tabIndex === 0 && !!activeTab ? activeTab : null}
        {tabIndex === 1 && !!fulfilledTab ? fulfilledTab : null}
      </Box>
    </Box>
  )
}

export default memo(PitchesTabs)
