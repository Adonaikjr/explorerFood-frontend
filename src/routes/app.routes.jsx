import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { Editpedido } from "../pages/edit_pedido";
import { Orders } from '../pages/Orders'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Editpedido />} />
        <Route path="/details/plates/:id" element={<Details />} />
        <Route path="/pedidos" element={<Orders />} />
      </Route>
     
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
