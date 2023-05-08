import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  animation: sidebar;
  animation-duration: 1s;

  @keyframes mymoveTwo {
    from {
      left: 200px;
    }
    to {
      left: 0px;
    }
  }

  padding-left: 6rem;
  padding-right: 6rem;
  color: white;
  height: 100%;
  input {
    background-color: ${({ theme }) => theme.COLORS.inputBackground};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    border: transparent;
  }
  > button {
    background-color: transparent;
    border: none;
    padding-top: 1rem;
    > p {
      color: white;
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
  @media (max-width: 900px) {
    padding: 0px;
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
  justify-content: space-between;
  gap: 1rem;
  #ContainerCategory {
    width: 40%;
  }
  width: 100%;
  input {
    margin: 0px;
  }
  img {
    width: 91%;
    height: 70%;
  }

  p {
    border: solid 1px white;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  margin-bottom: 1rem;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    input,
    label,
    #ContainerCategory {
      width: 100%;
    }
  }
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
  align-items: center;
  input {
    height: 3.5rem;
  }
  margin-bottom: 1rem;
`;

export const ContainerPrice = styled.div`
  margin-top: 1rem;
  width: 30%;
  @media (max-width: 900px) {
    width: 100%;
  }
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
  margin: 1rem;
`;

export const JustifyBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  button {
    font-family: Poppins;
    margin: 0px;
    width: 10rem;
    height: 3rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 14px;
    font-weight: 500;
    :hover {
      transition: 0.5s;
      background-color: ${({ theme }) => theme.COLORS.colorButtonCard};
    }
  }
`;
