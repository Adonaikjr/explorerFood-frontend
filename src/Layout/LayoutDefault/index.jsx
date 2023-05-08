import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { CardSearch } from "../../components/CardSearch";
import { ContainerHeader } from "../../components/ContainerHader";
import { Footer } from "../../components/Footer";
import { AuthContext } from "../../hooks/auth";
import { ContainerLayout } from "./styled";

export function LayoutDefault() {
  const { Query, search } = useContext(AuthContext);

  return (
    <ContainerLayout>
      <ContainerHeader />
      {Query &&
        Query?.map((item) => {
          if (!search) {
            return;
          }
          return (
            <CardSearch
              to={`/details/plates/${item.id}`}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      <Outlet />
      <Footer />
    </ContainerLayout>
  );
}
