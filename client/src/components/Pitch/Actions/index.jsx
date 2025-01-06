import { memo, useState } from 'react'
import { Box, Button } from '@mui/material'
import {
  Cancel, Key, MilitaryTech, Delete,
} from '@mui/icons-material'

import { PledgeModal, DeletePledgeModal } from 'components'

import { actionBtnProps, makePledgeBtnProps, deleteBtnProps } from './props'

const PitchActions = ({ id, pledge = null }) => {
  const [pledgeModal, setPledgeModal] = useState(false)
  const [deletePledgeModal, setDeletePledgeModal] = useState(false)

  return (
    <>
      <Box mt={2}>
        <Button {...actionBtnProps} startIcon={<Cancel />}>
          Set as Goal
        </Button>
        <Button {...actionBtnProps} startIcon={<Key />}>
          Add Innicative
        </Button>
        <Button {...actionBtnProps} startIcon={<MilitaryTech />}>
          Donate
        </Button>
        {pledge
          ? <Button {...deleteBtnProps} startIcon={<Delete />} onClick={() => setDeletePledgeModal(true)}>Delete Pledge</Button>
          : null}
      </Box>
      <Button {...makePledgeBtnProps} onClick={() => setPledgeModal(true)}>
        {pledge === null ? 'Make a Pledge' : `Edit my Pledge $${pledge.cents}`}
      </Button>
      {pledgeModal ? <PledgeModal clearShow={setPledgeModal} questionId={id} userPledge={pledge} /> : null}
      {deletePledgeModal ? <DeletePledgeModal clearShow={setDeletePledgeModal} pledgeId={pledge?.id} questionId={id} /> : null}
    </>
  )
}

export default memo(PitchActions)
