import { memo } from 'react'
import { Box, Button, DialogContentText } from '@mui/material'
import { useMutation } from 'react-query'

import { BaseModal } from 'components'
import { Loader } from 'layouts'

import { deleteBid } from 'api/bid'
import { getMsg } from 'utils/helpers'

import {
  confirmBtnProps, msgProps, keepBtnProps,
} from './props'
import { queryClient } from 'utils/clients'

const DeletePledgeModal = ({ pledgeId, questionId, clearShow }) => {
  console.log(pledgeId)
  const {
    mutate, isLoading, isError, isSuccess, error, data,
  } = useMutation(deleteBid, {
    onSuccess: () => {
      queryClient.invalidateQueries('question', questionId)
      clearShow(false)
    },
  })

  const handleClick = () => mutate({ id: pledgeId })

  if (isError) console.log(getMsg(error))
  if (isSuccess) console.log(data)

  return isLoading || isError ? <Loader /> : (
    <BaseModal
      title='Confirmation for deletion!'
      clearShow={clearShow}
      btn={(<Box>
        <Button {...confirmBtnProps} onClick={handleClick}>Confirm</Button>
        <Button {...keepBtnProps} onClick={() => clearShow(false)}>Keep</Button>
      </Box>)}
      cancel={false}
    >
      <DialogContentText {...msgProps}>Kindly confirm if you really want to delete pledge?</DialogContentText>
    </BaseModal>
  )
}

export default memo(DeletePledgeModal)
