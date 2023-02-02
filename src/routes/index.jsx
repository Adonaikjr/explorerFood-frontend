import { BrowserRouter, Route } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { id } = useAuth()

  return <BrowserRouter>{id ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}
