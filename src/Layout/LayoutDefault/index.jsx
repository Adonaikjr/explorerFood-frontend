import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { CardSearch } from "../../components/CardSearch";
import { ContainerHeader } from "../../components/ContainerHader";
import { Footer } from "../../components/Footer";
import { AuthContext } from "../../hooks/auth";

export function LayoutDefault() {
  const { Query, search } = useContext(AuthContext);
  return (
    <>
      <ContainerHeader />
      {Query &&
        Query?.map((item) => {
          if (!search) {
            return;
          }
          return (
            <CardSearch
              to={`/details/plates/${item[0].id -1}`}
              key={item.id}
              title={item[0].title}
              description={item[0].description}
            />
          );
        })}
      <Outlet />
      <Footer />
    </>
  );
}
