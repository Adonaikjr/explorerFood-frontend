import {
  ContainerHome,
  Section,
  Title,
  ContainerArticle,
  ContainerCarrousel,
  Main,
} from "./styled";
import { TranslateImg } from "../../components/TranslateImg";
import { Card } from "../../components/Cards";
import { useContext } from "react";
import { AuthContext } from "../../hooks/auth";

export function Home() {
  const { dataPlates } = useContext(AuthContext);
  const baseUrl = "http://localhost:3333";

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const newPlates_id = dataPlates.category
    ?.map((category) => {
      if (category.titleCategory === "Pratos") {
        return category.plate_id;
      }
    })
    .filter(Boolean);
  const newPlatesData = dataPlates.plates?.filter((item) => {
    if (newPlates_id.includes(item.id)) {
      return item;
    }
  });

  const newDrinks_id = dataPlates.category
    ?.map((category) => {
      if (category.titleCategory === "Bebidas") {
        return category.plate_id;
      }
    })
    .filter(Boolean);

  const newDrinksData = dataPlates.plates?.filter((item) => {
    if (newDrinks_id.includes(item.id)) {
      return item;
    }
  });

  const newDissert_id = dataPlates.category
    ?.map((category) => {
      if (category.titleCategory === "Sobremesa") {
        return category.plate_id;
      }
    })
    .filter(Boolean);
  const newDissertData = dataPlates.plates?.filter((item) => {
    if (newDissert_id.includes(item.id)) {
      return item;
    }
  });

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
          {newPlatesData &&
            newPlatesData.map((item) => {
              return (
                <Card
                  to={`/details/plates/${item.id - 1}`}
                  key={item.id}
                  plate_id={item.id}
                  p={item.description}
                  img={
                    <img
                      src={`${baseUrl}/file/${item.banner}`}
                      alt={item.title}
                    />
                  }
                  title={item.title}
                  price={item.price}
                />
              );
            })}
        </ContainerCarrousel>

        <h1>Sobremesas</h1>
        <ContainerCarrousel breakPoints={breakPoints}>
          {newDissertData &&
            newDissertData.map((item) => {
              return (
                <Card
                  to={`/details/plates/${item.id}`}
                  key={item.id}
                  p={item.description}
                  img={
                    <img
                      src={`${baseUrl}/file/${item.banner}`}
                      alt={item.title}
                    />
                  }
                  title={item.title}
                  price={item.price}
                />
              );
            })}
        </ContainerCarrousel>
        <h1>drinks</h1>
        <ContainerCarrousel breakPoints={breakPoints}>
          {newDrinksData &&
            newDrinksData.map((item) => {
              return (
                <Card
                  to={`/details/plates/${item.id - 1}`}
                  key={item.id}
                  p={item.description}
                  img={
                    <img
                      src={`${baseUrl}/file/${item.banner}`}
                      alt={item.title}
                    />
                  }
                  title={item.title}
                  price={item.price}
                />
              );
            })}
        </ContainerCarrousel>
      </Main>
    </ContainerHome>
  );
}
