import styled from "styled-components";
import { Container } from "../../components/Cards/styled";

export const ContainerBack = styled.div`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  height: 100%;
  margin-top: 31px;
  margin-bottom: 31px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;

  > button {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: transparent;
    border: none;
  }
`;
export const ContainerDetails = styled.main`
  height: auto;
  padding: 1rem 4rem;
  @media (max-width: 900px) {
    padding: 0rem 0rem;
  }
`;

export const ContainerContent = styled.div`
  font-family: Poppins;
  gap: 2rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  button {
    font-family: Poppins;
    font-size: 14px;
    margin: 0px;
    width: 162px;
    color: ${({ theme }) => theme.COLORS.color_font};
    background-color: ${({ theme }) => theme.COLORS.colorButtonCard};
  }
  > section {
    width: 100%;
    p {
      font-size: 24px;
    }
    h1 {
      font-size: 40px;
      font-weight: 500;
    }
  }

  @media (max-width: 900px) {
    padding-bottom: 48px;
    width: 100%;
    align-items: center;
    > section {
      p {
        font-size: 16px;
        text-align: center;
      }
      h1 {
        text-align: center;
        font-size: 27px;
        font-weight: 500;
      }
    }

    button {
      width: 89%;
      background-color: ${({ theme }) => theme.COLORS.styleButton};
      font-size: 14px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const ContainerImagePlate = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  img {
    width: 27rem;
    height: 27rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    img {
      width: 16.43rem;
      height: 16.43rem;
    }
  }
`;
export const ContainerIngredients = styled.div`
  margin: 0px;
  display: flex;
  gap: 1rem;
  width: 100%;

  > p {
    background-color: ${({ theme }) => theme.COLORS.background_ingredient};
    padding: 0.5rem;
    border-radius: 5px;
    margin: 0px;
    font-size: 14px;
  }
  @media (max-width: 900px) {
    gap: 24px;
    width: 90%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }
`;
export const ContentDetails = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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
  @media (max-width: 900px) {
    flex-direction: column;
    height: 100%;
  }
`;
export const ContainerAddCar = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  width: 100%;
  flex-direction: row-reverse;
  article {
    margin: 0px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  button {
    font-family: Poppins;
    font-size: 14px;
    margin: 0px;
    width: 162px;
    color: ${({ theme }) => theme.COLORS.color_font};
    background-color: ${({ theme }) => theme.COLORS.colorButtonCard};
  }

  @media (max-width: 900px) {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    strong {
      font-size: 22px;
    }
  }
`;
