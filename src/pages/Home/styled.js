import { Link } from "react-router-dom";
import styled from "styled-components";
import mask from "../../assets/mask.svg";
import Carousel from "react-elastic-carousel";
export const ContainerHome = styled.div``;
export const Main = styled.main`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  > h1 {
    padding: 1rem;
    margin: 1rem;
    width: 84%;
    text-align: left;
  }
`;
export const ContainerArticle = styled.article`
  padding: 0px 124px 62px 124px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;
export const ContainerCarrousel = styled(Carousel)`
  padding: 1rem;
  margin-bottom: 2rem;
  .rec.rec-arrow {
    border: transparent;
    background-color: transparent;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  .rec-carousel-item:focus {
    outline: auto;
  }
  
`;

export const Section = styled.div`
  margin-top: 10.18rem;
  height: auto;
  border-radius: 8px;
  display: flex;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  flex-wrap: wrap;
`;

export const Title = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  text-align: center;
  width: 28.5rem;
  h1 {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
    line-height: 45px;

    color: ${({ theme }) => theme.COLORS.GRAY_80};

    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
  p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
  }
`;

export const Background = styled.div`
  flex: 1;
  height: 632px;
  height: 406px;
  opacity: 80;
  margin-left: -3rem;
  background-image: url(${mask});
  background-repeat: no-repeat;
  display: flex;
`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;
  width: 100%;
  > li {
    margin-bottom: 24px;
  }
`;
export const Search = styled.div`
  grid-area: search;
  width: 100%;
  padding: 64px 64px 0px;
`;
export const Content = styled.div`
  width: 100%;
  grid-area: content;
  padding: 0px 64px;
  overflow: scroll;
`;
export const NewNote = styled(Link)`
  grid-area: newnote;

  background: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 4rem;
  text-align: center;
  font-size: 24px;
  svg {
    margin-right: 8px;
    font-size: 24px;
  }

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  text-decoration: none;
`;
