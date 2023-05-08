import styled from "styled-components";

export const ContainerButton = styled.button`
  background-color: ${({ theme, active }) => active ? theme.COLORS.GRAY_600 : theme.COLORS.buttonDisabled};
  width: 100%;
  border-radius: 5px;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  height: 3rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  img {
    margin: 0;
    padding: 0;
    height: 100%;
    width: auto;
  }
`;
