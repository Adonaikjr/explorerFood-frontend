import { Button } from "../Button";
import { Container, Content } from "./styled";
import { IoAdd, IoRemove } from "react-icons/all";
import { useState } from "react";

export function Card({ title, img, p, price }) {
  const [value, setValue] = useState(0);

  if (value < 0) {
    setValue(0);
  }
  return (
    <Container>
      <div>{img}</div>
      <h1>{title}</h1>
      <p>{p}</p>
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

        <Button title="Incluir" />
      </Content>
    </Container>
  );
}
