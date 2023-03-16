/* eslint-disable prettier/prettier */
import ContainerButton, { Container, Logo, Label, Favorites } from "./styled";
import polygon from "../../assets/logo.svg";
import { NewButton } from "../NewButton";
import { Input } from "../Input";
import { BsSearch } from "react-icons/bs";
import { IoExitOutline } from "react-icons/all";
import { AuthContext, useAuth } from "../../hooks/auth";
import icons from "../../assets/icon1.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../../service/api";
export function ContainerHeader() {
  const { signOut } = useAuth();
  const { countOrder, setSearch } = useContext(AuthContext);
  const [admin, setAdmin] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const userId = localStorage.getItem("@explorerFood:id");

  async function getUserAdmin() {
    try {
      const response = await api.get(`users/${userId}`);
      setData(response.data.isAdmin);
    } catch (error) {
      console.log(error);
    }
  }

  function handleExit() {
    signOut();
    navigate("/");
  }
  useEffect(() => {
    getUserAdmin();
    {
      data === 1 ? setAdmin("Admin") : setAdmin("");
    }
  }, [data]);

  return (
    <Container>
      <Link to="/new">
        <Logo>
          <p>{admin}</p>
          <img src={polygon} alt="polyg" />
        </Logo>
      </Link>
      <Favorites>
        <>Meus Favoritos</>
      </Favorites>
      <Label>
        <Input
          placeholder="Pratos do dia?🔍"
          icon={BsSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Label>
      <ContainerButton to="/pedidos">
        <NewButton title="Meu pedido" countOrder={countOrder}>
          <img src={icons} alt="icon" />
        </NewButton>
      </ContainerButton>
      <IoExitOutline size={30} onClick={handleExit} />
    </Container>
  );
}
