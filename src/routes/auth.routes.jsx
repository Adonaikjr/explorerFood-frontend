import { Routes, Route } from 'react-router-dom'
import { Error } from '../pages/Error'
import { App } from '../pages/Details/App'
import { Home } from '../pages/Home'
import { Signin } from '../pages/SignIn'
import { Signup } from '../pages/SignUp'
import { Profile } from '../pages/Profile'
import { New } from '../pages/New'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  )
}
