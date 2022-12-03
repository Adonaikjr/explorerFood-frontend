import { Routes, Route } from 'react-router-dom'
import { Error } from '../pages/Error'
import { App } from '../pages/Details/App'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { LayoutDefault } from '../Layout/LayoutDefault'
import { Editpedido } from '../pages/edit_pedido'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Editpedido />} />
      </Route>

      <Route path="/details/:id" element={<App />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<Error />} />
    </Routes>
  )
}
