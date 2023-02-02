import {
  ContainerHome,
  Section,
  Title,
  ContainerArticle,
  ContainerCarrousel,
  Main,
} from "./styled";
import { TranslateImg } from "../../components/TranslateImg";

import { api } from "../../service/api";
import { Card } from "../../components/Cards";
import { useState } from "react";
import { useEffect } from "react";

export function Home() {
  const [prato, setPrato] = useState([]);
  const [bebida, setBebida] = useState([]);
  const [sobremesa, setSobremesa] = useState([]);
  const baseUrl = "http://localhost:3000";

  useEffect(() => {
    async function getPlates() {
      try {
        const pratos = await api.get("/newPlate");
        console.log(pratos.data);
        setPrato(pratos.data);

        const bebidas = await api.get("/bebidas");
        console.log(bebidas);
        setBebida(bebidas.data);

        const sobremesas = await api.get("/sobremesas");
        console.log(sobremesas);
        setSobremesa(sobremesas.data);
      } catch (error) {
        console.log(error);
      }
    }
    getPlates();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <ContainerHome>
      <ContainerArticle>
        <Section>
          <TranslateImg />
          <Title>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </Title>
        </Section>
      </ContainerArticle>
      <Main>
        <h1>Pratos Principais</h1>

        <ContainerCarrousel breakPoints={breakPoints}>
          {prato.map((item) => {
            return (
              <Card
                key={item.id}
                img={
                  <img
                    src={`${baseUrl}/files/${item.banner}`}
                    alt={item.name}
                  />
                }
                p={item.ingredients}
                price={item.price}
                title={item.name}
              />
            );
          })}
        </ContainerCarrousel>

        <h1>Sobremesas</h1>
        <ContainerCarrousel breakPoints={breakPoints}>
          {sobremesa.map((sobremesas) => {
            return (
              <Card
                key={sobremesas.id}
                img={
                  <img
                    src={`${baseUrl}/files/${sobremesas.banner}`}
                    alt={sobremesas.name}
                  />
                }
                p={sobremesas.ingredients}
                price={sobremesas.price}
                title={sobremesas.name}
              />
            );
          })}
        </ContainerCarrousel>
        <h1>Bebidas</h1>
        <ContainerCarrousel breakPoints={breakPoints}>
          {bebida.map((bebidas) => {
            return (
              <Card
                key={bebidas.id}
                img={
                  <img
                    src={`${baseUrl}/files/${bebidas.banner}`}
                    alt={bebidas.name}
                  />
                }
                p={bebidas.ingredients}
                price={bebidas.price}
                title={bebidas.name}
              />
            );
          })}
        </ContainerCarrousel>
      </Main>
    </ContainerHome>
  );
}
