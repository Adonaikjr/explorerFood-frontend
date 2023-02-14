import styled from "styled-components";

export const Container = styled.div`
 
  width: 18.75rem;
  margin: 1rem;
  padding: 1rem;
  height: 30rem;
  background-color: ${({ theme }) => theme.COLORS.background_card};
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  h1 {
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: left;
  }
  :hover {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.03);
    transition: 0.5s;
  }
  img {
    cursor: pointer;
    width: 11rem;
    height: 11rem;
    margin: 1rem;
  }
  strong {
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.priceColor};
  }
  p {
    font-family: ${({ theme }) => theme.COLORS.popinsFont};
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.color_font};
    text-align: center;
    margin: 10px;
  }

  button {
    width: 92px;
    height: 48px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.color_font};
    background-color: ${({ theme }) => theme.COLORS.colorButtonCard};
  }

  span {
    display: flex;
    > img {
      width: 120px;
      height: 120px;
    }
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  > img {
    width: 100%;
    height: 15px;
  }
  margin: 12px;
  > p {
    font-family: Roboto;
    font-size: 32px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.THYFANY};
  }
`;