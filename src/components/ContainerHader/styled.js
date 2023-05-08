/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  animation: sidebar;
  animation-duration: 0.5s;
  transition: 2s;
  width: 100%;
  height: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.COLORS.secondBackground};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
    > svg {
      display: none;
    }
  }
  gap: 12px;
  button {
    width: 13.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 12px;
    }
    > svg {
      margin-left: 5px;
      width: 2rem;
      height: 3rem;
    }
  }
  font-family: Roboto;
  font-size: 16px;
  text-align: center;

  @media (max-width: 900px) {
    a {
      > svg {
        display: block;
      }
    }

    svg {
      display: inline-block;
      animation: rotate 0.5s linear;
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    padding-top: 56px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
    }
  }
`;
export const Logo = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > p {
    color: ${({ theme }) => theme.COLORS.priceColor};
    width: 100%;
    text-align: start;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    font-size: 12px;
  }
  img {
    width: 163px;
  }
  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;
export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.inputBackground};
  border-radius: 5px 5px 5px 5px;
  width: 40rem;
  input {
    height: 2rem;
    //border: 1px solid ${({ theme }) => theme.COLORS.BORDER_INPUT};
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
    display: flex;
  }
  @media (max-width: 900px) {
    display: none;
    width: 0px;
    height: 0px;
    input {
      display: none;
      width: 0px;
      height: 0px;
      font-size: 0px;
      border: none;
    }
  }
`;
export const ContainerButton = styled(Link)`
 
  button {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 900px) {
    margin: 0px;
    padding: 0px;
    width: 0px;
    height: 0px;

    img {
      margin: 0px;
    }
    button {
      width: 0px;
      height: 0px;
      font-size: 0px;
      margin: 0px;
      background-color: transparent;
      border: none;
    }
  }
`;
export const Favorites = styled.div`
  display: flex;
  align-items: center;
`;
export const ContentExit = styled.div`
  @media (max-width: 900px) {
    border: none;
    width: 0px;
    height: 0px;
    svg {
      width: 0px;
      height: 0px;
    }
  }
`;
