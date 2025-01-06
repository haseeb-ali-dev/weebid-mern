import { memo } from 'react'
import { DialogContentText, Button } from '@mui/material'

import { BaseModal } from 'components'

import { okBtnProps, msgProps } from './props'

const AlertModal = ({
  title = 'Alert', info = 'Something gone wrong', clearError = null,
}) => (
  <BaseModal
    title={title}
    clearError={clearError}
    btn={<Button onClick={clearError} {...okBtnProps}>Ok</Button>}
  >
    <DialogContentText {...msgProps}>{info}</DialogContentText>
  </BaseModal>
)

export default memo(AlertModal)
