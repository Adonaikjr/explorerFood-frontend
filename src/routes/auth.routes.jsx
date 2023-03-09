import { Routes, Route } from 'react-router-dom'
import { Signin } from '../pages/SignIn'
import { Signup } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  )
}
