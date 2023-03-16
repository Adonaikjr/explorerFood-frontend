import { Button } from "../Button";
import { Container, Content, ContentCard, ContainerFavorite } from "./styled";
import { IoAdd, IoRemove, MdFavorite } from "react-icons/all";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../hooks/auth";
import { api } from "../../service/api";
import { toast } from "react-toastify";

export function Card({ title, img, p, price, to, plate_id, favorite: Favorite }) {
  const [value, setValue] = useState(0);
  const { countOrder, setCountOrder } = useContext(AuthContext);
  const [status, setStatus] = useState("Pendente");

  const userId = localStorage.getItem("@explorerFood:id");
  const [data, setData] = useState([]);
  const { isFavorite, setIsFavoreite } = useState("red");
  if (value < 0) {
    setValue(0);
  }
  async function handleAddCard() {
    try {
      const response = await api.post(`order/${userId}`, {
        status,
        plate_id,
      });
      toast.success("Adicionado aos pedidos");
      console.log(response.data);
    } catch (error) {
      console.log(`Ooops algo deu errado ${error}`);
    }
  }
  return (
    <Container>
      <ContainerFavorite>
        <div></div>
        {Favorite}
      </ContainerFavorite>
      <ContentCard to={to}>
        <div>{img}</div>
        <h1>{title}</h1>
        <p>{p}</p>
      </ContentCard>
      <strong>R$ {price}</strong>
      <Content>
        <IoAdd
          size={24}
          style={{ cursor: "pointer" }}
          onClick={() => setValue((value) => value + 1)}
        />
        <p>{value}</p>

        <IoRemove
          style={{ cursor: "pointer" }}
          size={24}
          onClick={() => setValue((value) => value - 1)}
        />

        <Button title="Incluir" onClick={handleAddCard} />
      </Content>
    </Container>
  );
}
