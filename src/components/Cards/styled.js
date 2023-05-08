import { BsJustify } from "react-icons/bs";
import { HiEmojiHappy } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
  color: ${({ theme }) => theme.COLORS.color_font};
  background-color: ${({ theme }) => theme.COLORS.background_card};
  border-radius: 8px;
  transition: 0.5s;
  margin-right: 1rem;
  flex: 1;
  padding: 0.5rem;

  strong {
    font-weight: 400;
    font-size: 32px;
    display: flex;
    color: ${({ theme }) => theme.COLORS.priceColor};
    justify-content: center;
    text-align: center;
  }
  button {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.color_font};
    background-color: ${({ theme }) => theme.COLORS.colorButtonCard};
  }

  @media (max-width: 900px) {
    align-items: center;
    justify-content: space-evenly;
    gap: 12px;
  }
`;

export const ContentCard = styled(Link)`
color: ${({theme}) => theme.COLORS.WHITE};
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  img {
    cursor: pointer;
    width: 11rem;
    height: 11rem;
  }
  :hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.03);
    transition: 0.5s;
  }
  h1 {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    width: 100%;
  }
  p {
    font-family: ${({ theme }) => theme.COLORS.popinsFont};
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.color_font};
    word-wrap: break-word;
    width: 200px;
    height: 100%;
  }
  @media (max-width: 900px) {
    p {
      width: 0px;
      font-size: 0px;
      height: 0px;
    }
    h1 {
      font-size: 14px;
    }
    img {
      width: 88px;
      height: 88px;
      margin-bottom: 12px;
    }
  }
`;
export const ContainerFavorite = styled.div`
  margin-top: 1rem;
  width: 100%;
  text-align: right;
  padding-right: 5px;
`;
export const ContainerEdit = styled.div`
  width: 100%;
  text-align: right;
  padding-right: 5px;
  img {
    width: 24px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  button {
    display: block !important;
    width: 7.2rem;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 3rem;
  }
  strong {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.priceColor};
  }
  > p {
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.THYFANY};
  }

  @media (max-width: 900px) {
    width: 80%;
    flex-direction: column;
    button {
      display: block !important;
      height: 32px;
      margin-top: 1rem;
    }
    > div {
      margin-top: 12px;
      width: 100px;
      display: flex;
      align-items: center;
      > p {
        width: auto;
      }
    }
    strong {
      font-size: 16px;
    }
  }
`;
