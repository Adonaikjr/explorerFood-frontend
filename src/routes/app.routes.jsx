import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { Editpedido } from "../pages/edit_pedido";
import { Orders } from '../pages/Orders'
import { useAuth } from "../hooks/auth";

export function AppRoutes() {
  const {isAdmin} = useAuth()
 
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        { (isAdmin == 1 ) ? <Route path="/new" element={<Editpedido />} /> : <Route path="/new" element={<Home />} /> }
        <Route path="/details/plates/:id" element={<Details />} />
        <Route path="/pedidos" element={<Orders />} />
        <Route path="*" element={<Error />} />
      </Route>
 
    </Routes>
  );
}
