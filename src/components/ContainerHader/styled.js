/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: auto;
  padding: 2rem 3rem 2rem 3rem;
  background-color: ${({ theme }) => theme.COLORS.secondBackground};
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  > svg {
    height: 2rem;
    width: 3rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #fff;
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
  font-weight: 400;
  line-height: 26px;

  text-align: center;
`;
export const Logo = styled.div`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  display: flex;
  flex-direction: column;
  > p {
    color: ${({theme}) => theme.COLORS.priceColor};
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
`;
export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.inputBackground};
  border-radius: 5px 5px 5px 5px;
  width: 21.5rem;

  input {
    height: 3rem;
    //border: 1px solid ${({ theme }) => theme.COLORS.BORDER_INPUT};
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.BORDER_INPUT};
    display: flex;
  }
`;
export default styled(Link)`
  button {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }
`;
export const Favorites = styled.div`
  display: flex;
  align-items: center;
`;
