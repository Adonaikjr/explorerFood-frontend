import { useNavigate } from "react-router-dom";
import { ContainerCardSearch } from "./styled";
import { useContext } from "react";
import { AuthContext } from "../../hooks/auth";

export function CardSearch({ title, description, to }) {
  const navigate = useNavigate();
  const { setSearch } = useContext(AuthContext);
  function handleNavigate() {
    navigate(to);
    setSearch("");
  }
  return (
    <ContainerCardSearch onClick={handleNavigate}>
      <h3>{title}</h3>
      <p>{description}</p>
    </ContainerCardSearch>
  );
}
