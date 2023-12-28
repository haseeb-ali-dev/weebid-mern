import { useParams } from 'react-router-dom'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'

import { userProfile } from 'api/user'

import { ProfileImage, ProfilePitches } from 'components'
import { Loader } from 'layouts'

const Profile = () => {
  const { id } = useParams()
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await userProfile(id)
      setUser(data)
      setLoading(true)
    }
    fetchUser()
  }, [id])

  return loading ? (
    <Grid container spacing={2} width='95%' m='auto'>
      <Grid item md={12} lg={4} sm={12} xs={12}>
        <ProfileImage user={user} />
      </Grid>
      <Grid item md={12} lg={8} sm={12} xs={12}>
        <ProfilePitches pitches={user.pitches} id={id} />
      </Grid>
    </Grid>
  ) : <Loader />
}
export default Profile
