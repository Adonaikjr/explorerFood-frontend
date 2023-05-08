import { Button } from "../Button";
import {
  Container,
  Content,
  ContentCard,
  ContainerFavorite,
  ContainerEdit,
} from "./styled";
import { IoAdd, IoRemove, MdFavorite } from "react-icons/all";
import { useState } from "react";
import iconEdit from "../../assets/edit.svg";

export function Card({
  title,
  img,
  p,
  price,
  to,
  plate_id,
  favorite: Favorite,
}) {
  const [value, setValue] = useState(0);
  const isAdmin = localStorage.getItem("@explorerFood:isAdmin");

  if (value < 0) {
    setValue(0);
  }

  return (
    <Container>
      {isAdmin == 1 ? (
        <ContainerEdit>
          <img src={iconEdit} alt="iconEdit" />
        </ContainerEdit>
      ) : (
        <ContainerFavorite>{Favorite}</ContainerFavorite>
      )}

      <ContentCard to={to}>
        <div>{img}</div>
        <h1>{title}</h1>
        <p>{p}</p>
      </ContentCard>

      <strong>R$ {price}</strong>

      {isAdmin == 1 ? null : (
        <Content>
          <div>
            <IoAdd
              size={24}
              style={{ cursor: "pointer" }}
              onClick={() => setValue((value) => value + 1)}
            />
            <p>{value}</p>

            <IoRemove
              size={24}
              style={{ cursor: "pointer" }}
              onClick={() => setValue((value) => value - 1)}
            />
          </div>

          <Button title="Incluir"/>
        </Content>
      )}
    </Container>
  );
}
