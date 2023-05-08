import {
  ContainerHome,
  Section,
  Title,
  ContainerArticle,
  ContainerCarrousel,
  Main,
  ContainerStroll,
} from "./styled";
import { TranslateImg } from "../../components/TranslateImg";
import { Card } from "../../components/Cards";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../hooks/auth";
import { MdFavorite, AiOutlineHeart } from "react-icons/all";
import { useState } from "react";

export function Home() {
  const { dataPlates, VerifyIsAdmin, getPlate } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const baseUrl = "http://localhost:3333";

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
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
      if (category.titleCategory === "Sobremesas") {
        return category.plate_id;
      }
    })
    .filter(Boolean);
  const newDissertData = dataPlates.plates?.filter((item) => {
    if (newDissert_id.includes(item.id)) {
      return item;
    }
  });
  function handleFavorites() {
    setIsFavorite(true);
    if (isFavorite) {
      setIsFavorite(false);
    }
  }

  useEffect(() => {
    VerifyIsAdmin();
    getPlate();
  }, []);
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
            newPlatesData?.map((item) => {
              return (
                <Card
                  to={`/details/plates/${item.id}`}
                  favorite={
                    isFavorite === false ? (
                      <AiOutlineHeart
                        size={24}
                        color="white"
                        onClick={handleFavorites}
                      />
                    ) : (
                      <MdFavorite
                        size={24}
                        color="red"
                        onClick={handleFavorites}
                      />
                    )
                  }
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
                  favorite={
                    isFavorite === false ? (
                      <AiOutlineHeart
                        size={24}
                        color="white"
                        onClick={handleFavorites}
                      />
                    ) : (
                      <MdFavorite
                        size={24}
                        color="red"
                        onClick={handleFavorites}
                      />
                    )
                  }
                  plate_id={item.id}
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
                  plate_id={item.id}
                  to={`/details/plates/${item.id}`}
                  favorite={
                    isFavorite === false ? (
                      <AiOutlineHeart
                        size={24}
                        color="white"
                        onClick={handleFavorites}
                      />
                    ) : (
                      <MdFavorite
                        size={24}
                        color="red"
                        onClick={handleFavorites}
                      />
                    )
                  }
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
