/* eslint-disable prettier/prettier */
import {
  ContainerButton,
  Container,
  Logo,
  Label,
  Favorites,
  ContentExit,
} from "./styled";
import polygon from "../../assets/logo.svg";
import { NewButton } from "../NewButton";
import { Input } from "../Input";
import { BsSearch } from "react-icons/bs";
import { IoExitOutline, AiOutlineMenu } from "react-icons/all";
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
      <Link to="/menu">
        <AiOutlineMenu size={24} />
      </Link>

      <Logo>
        <img src={polygon} alt="polyg" />
        <p>{admin}</p>
      </Logo>
      
      <Label>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={BsSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Label>

      {data === 1 ? (
        <ContainerButton to="/new">
          <NewButton title="Novo Prato" />
        </ContainerButton>
      ) : (
        <NewButton title="Pedidos">
          <img src={icons} alt="icon" />
        </NewButton>
      )}

      <ContentExit>
        <IoExitOutline size={30} onClick={handleExit} cursor="pointer" />
      </ContentExit>
    </Container>
  );
}
