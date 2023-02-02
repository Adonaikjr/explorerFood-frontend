import styled from "styled-components";

export const Container = styled.div`
  color: white;
  height: 100%;
  input {
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    border: transparent;
  }
  input,
  label {
    border: transparent;
    margin: 0rem 1rem 0rem 1rem;
  }
`;

export const Form = styled.form`
  padding: 1rem;
  label {
    color: ${({ theme }) => theme.COLORS.font_color};
  }
`;
export const BoxA = styled.div`
  display: flex;
  //border: solid;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    border: none;
    height: 100%;
    img {
      width: 91%;
      height: 70%;
    }
  }
  input {
    height: 3.5rem;
  }
  p {
    border: solid 1px white;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  border-radius: 5px;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  width: 100%;
  border: none;
`;
export const BoxB = styled(BoxA)`
  //border: solid;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  input {
    height: 3.5rem;
  }
  margin-bottom: 1rem;
`;

export const ContainerPrice = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const BoxC = styled.div`
  //border: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    border: none;
  }
  input {
    margin: 0;
    height: 12.25rem;
    width: 100%;
  }
  margin-bottom: 1rem;
  label {
    width: 100%;
  }
`;
export const Title = styled.h1`
  margin: 2rem;
`;

export const JustifyBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  button {
    border: solid red;
    width: 30rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 2rem;
  }
`;
