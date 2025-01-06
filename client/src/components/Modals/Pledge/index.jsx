import { memo, useState } from 'react'
import { useMutation } from 'react-query'
import {
  Box, OutlinedInput, FormControl, Stepper, Step, StepButton, Button, Typography,
} from '@mui/material'

import { BaseModal } from 'components'

import { createBid, updateBid } from 'api/bid'
import { queryClient } from 'utils/clients'
import { getMsg, id } from 'utils/helpers'
import { proceedBtnProps, amountFieldInput, pledgeLabelProps } from './props'

import pledgeSuccess from 'assets/pledge-success.png'

const steps = ['Pledge', 'Payment', 'Confirm']

const PledgeModal = ({
  title = 'Make a Pledge', clearShow = null, questionId, userPledge = null,
}) => {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({ 0: false, 1: false, 2: false })
  const [amount, setAmount] = useState(userPledge?.cents ?? 0)

  const successHandler = () => {
    setActiveStep(2)
    queryClient.invalidateQueries('question', questionId)
    setTimeout(() => {
      clearShow(false)
    }, 3000)
  }

  const {
    mutate: add, isError: addIsError, error: addError, data: addData,
  } = useMutation(createBid, {
    onSuccess: () => successHandler(),
  })

  const {
    mutate: update, isError: updateIsError, error: updateError, data: updateData,
  } = useMutation(updateBid, {
    onSuccess: () => successHandler(),
  })
  const userId = id()

  const handleClick = () => {
    if (userPledge === null) {
      add({ cents: amount, questionId, userId })
    } else {
      update({ cents: amount, questionId, userId })
    }
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
    setCompleted(flags => ({ ...flags, [step]: true }))
  }

  const handleChange = e => setAmount(e.target.value)

  const proceedBtn = <Button onClick={handleClick} {...proceedBtnProps}>Proceed to payment</Button>

  return (
    <BaseModal title={activeStep !== 2 && title} clearShow={clearShow} btn={activeStep === 0 && proceedBtn} cancel={activeStep !== 2}>
      {activeStep !== 2 && (<Box sx={{ width: '100%', mb: 4, mt: 2 }}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index + 1]}>
              <StepButton color='inherit' onClick={handleStep(index)}>
                <Box color='#7B7B7B'>{label}</Box>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>)}
      {activeStep === 0 && (
        <FormControl sx={{ width: '98%' }}>
          <Box {...pledgeLabelProps}>Pledge Amount</Box>
          <OutlinedInput {...amountFieldInput} value={amount} onChange={handleChange} />
          {addIsError || updateIsError ? <Box component='span' color='#686868' mt={2} mx={1}>{getMsg(addError || updateError)}</Box> : null}
        </FormControl>
      )}
      {activeStep === 1 && (
        <Box>Hello World</Box>
      )}
      {activeStep === 2 && (
        <Box sx={{ width: '98%', textAlign: 'center' }}>
          <Box component='img' src={pledgeSuccess} width='90%' />
          <Typography color='white' fontSize='17px'>Pledge Received!</Typography>
          <Typography color='#5ABBA2' fontSize='14px'>{addData?.msg ?? updateData?.msg}</Typography>
        </Box>
      )}
    </BaseModal>
  )
}

export default memo(PledgeModal)
