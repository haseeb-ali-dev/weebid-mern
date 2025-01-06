import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import {
  Home, Signin, Signup, Profile, Ask, Search, Pitch,
} from 'containers'

import Protected from './protected'
import Authenticated from './authenticated'

const Main = () => {
  const [user, setUser] = useState({ email: '', password: '' })

  return (
    <Routes>
      <Route path='/' element={<Protected><Home /></Protected>} />
      <Route path='/user/:id' element={<Protected><Profile /></Protected>} />
      <Route path='/search' element={<Protected><Search /></Protected>} />
      <Route path='/ask/user/:id' element={<Protected><Ask /></Protected>} />
      <Route path='/question/:id' element={<Protected><Pitch /></Protected>} />
      <Route path='/create-account' element={<Authenticated><Signup user={user} setUser={setUser} /></Authenticated>} />
      <Route path='/login' element={<Authenticated><Signin user={user} setUser={setUser} /></Authenticated>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export default Main
