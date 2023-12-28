import { useState, forwardRef, memo } from 'react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions, Stack, Slide, Button, Divider,
} from '@mui/material'

import {
  dialogActionsProps, dialogProps, dividerProps, cancelBtnProps,
} from './props'
import './style.css'

const Transition = forwardRef((props, ref) => <Slide direction='down' ref={ref} {...props} />)

const BaseModal = ({
  children, title, clearError = null, clearSuccess = null, clearShow = null, btn = null, cancel = true,
}) => {
  const [open, setOpen] = useState(true)
  const handleClose = () => {
    setOpen(false)
    if (clearError) clearError(null)
    if (clearSuccess) clearSuccess(null)
    if (clearShow) clearShow(false)
  }

  return (
    <Dialog open={open} onClose={handleClose} {...dialogProps(Transition)}>
      <Stack sx={{ alignItems: 'center' }}>
        <DialogTitle variant='h5'>{title}</DialogTitle>
        <DialogContent sx={{ width: '100%' }}>{children}</DialogContent>
      </Stack>
      {(btn || cancel) ? (
        <DialogActions {...dialogActionsProps}>
          {btn}
          {cancel ? (
            <>
              <Divider {...dividerProps} />
              <Button onClick={handleClose} {...cancelBtnProps}>Cancel</Button>
            </>
          ) : null}
        </DialogActions>
      ) : null}
    </Dialog>
  )
}

export default memo(BaseModal)
