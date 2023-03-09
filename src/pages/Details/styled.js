import styled from "styled-components";
import { Container } from "../../components/Cards/styled";

export const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
li {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
 img {
  margin: 0px;
  padding: 0px;
  height: 50px;
  width: 50px;
 }
}
  color: white;
`;
export const ContainerIngredientImage = styled.div`
display: flex;
gap: 0.5rem;
`
export const ContentDetails = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  p,
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
  img {
    width: 100%;
    padding: 1.4rem;
  }
`;
export const ContainerAddCar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  strong {
    margin: 1rem;
    font-size: 24px;
  }
  button {
    margin: 1rem;
    color: ${({ theme }) => theme.COLORS.color_font};
    background-color: ${({ theme }) => theme.COLORS.colorButtonCard};
  }
`;
