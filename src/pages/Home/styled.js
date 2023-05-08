import { Link } from "react-router-dom";
import styled from "styled-components";
import mask from "../../assets/mask.svg";
import Carousel from "react-elastic-carousel";

export const ContainerHome = styled.div`
  position: relative;
  animation: sidebar;
  animation-duration: 0.5s;
  transition: 2s;
`;
export const Main = styled.main`
 
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > h1 {
    width: 100%;
    text-align: left;
    padding-left: 4rem;
  }
  @media (max-width: 900px) {
    h1 {  
      font-size: 18px;
       padding-left: 1rem;
    }
  }

`;
export const ContainerArticle = styled.article`
  padding: 0px 124px 62px 124px;
  @media (max-width: 600px) {
    padding: 0;
  }
`;
export const ContainerCarrousel = styled(Carousel)`
  height: 100%;
  width: 100%;
  
  .rec.rec-item-wrapper {
    height: 100%;
  }
  .rec.rec-arrow {
    background-color: transparent;
  }
  .rec.rec-arrow:disabled {
    visibility: collapse;
  }

  .rec-carousel-item:focus {
    outline: auto;
  }
  .rec.rec-arrow:hover {
  }
  position: relative;
  animation: sidebar;
  animation-duration: 1s;
  @keyframes mymoveCarrousel {
    from {
      top: 200px;
    }
    to {
      top: 0px;
    }
  }
  @media (max-width: 900px) {
    button {
      display: none;
    }
  }
`;

export const Section = styled.div`
  margin-top: 10.18rem;
  height: 16.25rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  @media (max-width: 900px) {
    margin-top: 44px;
    flex-wrap: nowrap;
    width: 28rem;
    height: 7rem;
  }
  @media (max-width: 428px) {
    margin-top: 44px;
    flex-wrap: nowrap;
    width: 23.5rem;
    height: 7rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 28.5rem;

  h1 {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_80};
    position: relative;
    animation: mymoveTwo;
    animation-duration: 1s;

    @keyframes mymoveTwo {
      from {
        left: 200px;
      }
      to {
        left: 0px;
      }
    }
  }
  p {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    position: relative;
    animation: mymoveTwo;
    animation-duration: 2s;
  }
  @media (max-width: 900px) {
    flex-wrap: nowrap;

    h1 {
      font-size: 18px;
      padding-right: 5px;
      text-align: left;
    }
    p {
      padding-left: 8px;
      font-size: 12px;
      text-align: left;
      padding-right: 5px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  height: 632px;
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
export const ContainerStroll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;
