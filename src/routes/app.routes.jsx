import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { LayoutDefault } from "../Layout/LayoutDefault";
import { Sidebar } from "../components/SideBar";
import New from "../pages/New";
import { Editpedido } from "../pages/edit_pedido";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />

        <Route path="/details/plates/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Editpedido />} />

        <Route path="*" element={<Error />} />
      </Route>
      <Route path="/menu" element={<Sidebar />} />
    </Routes>
  );
}
