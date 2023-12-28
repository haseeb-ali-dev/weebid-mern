import { useState } from 'react'
import {
  Autocomplete, TextField, Box, Avatar,
} from '@mui/material'
import { Clear } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { autoCompleteProps, textFieldProps, clearIconProps } from './props'
import { searchInfluencers } from 'api/user'

const Searchbox = () => {
  const [influencers, setInfluencers] = useState([])

  const fetchInfluencers = async (e) => {
    const { data } = await searchInfluencers(e.target.value)
    // console.log(data)
    setInfluencers(data)
  }

  return (
    <Autocomplete
      {...autoCompleteProps}
      options={influencers}
      clearIcon={<Clear {...clearIconProps} />}
      onInputChange={fetchInfluencers}
      getOptionLabel={(option) => option.name ?? 'No user found'}
      renderOption={(props, option) => (
        <Box component={Link} to={`/user/${option.id}`} sx={{ '& > img': { mr: 2, flexShrink: 0 }, textDecoration: 'none', color: '#d6d5d5' }} {...props}>
          <Avatar
            alt={option.name}
            src={option.avatar}
            sx={{
              width: 30, height: 30, mr: 1, mb: 1,
            }}
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => {
        const { placeholder, sx } = textFieldProps
        params.InputProps.placeholder = placeholder
        params.InputProps.sx = sx
        return (<TextField {...params} />)
      }}
    />
  )
}

export default Searchbox
