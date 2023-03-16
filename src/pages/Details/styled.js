import styled from "styled-components";
import { Container } from "../../components/Cards/styled";

export const ContainerDetails = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
  width: 100%;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  color: white;
`;
export const ContainerIngredientImage = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const ContainerContent = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
`;
export const ContainerImagePlate = styled.div`
  width: 50vh;
  > img {
    width: 100%;
  }
`;
export const ContentDetails = styled.main`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  height: 68vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  > p,
  h1 {
    width: 100%;
    text-align: center;
    padding: 0.2rem;
  }
  p {
    > span {
      font-size: 32px;
      font-weight: 400;
      line-height: 51px;
      letter-spacing: 0em;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.priceColor};
    }
  }
  @media (max-width: 1015px) {
    justify-content: center;
    height: 100%;
  }
`;
export const ContainerAddCar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  > p {
    width: auto;
  }
  strong {
    margin: 1rem;
    font-size: 24px;
  }
  button {
    width: auto;
    margin: 1rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.COLORS.color_font};
    background-color: ${({ theme }) => theme.COLORS.colorButtonCard};
  }
`;

export const ButtonDelete = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  background-color: ${({theme}) => theme.COLORS.styleButton};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color:${({theme}) => theme.COLORS.WHITE}; ;

`