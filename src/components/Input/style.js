import styled from "styled-components";

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 5px;
  margin-bottom: 8px;
  //border:solid 1px ${({ theme }) => theme.COLORS.WHITE};
  border: transparent;
  
  margin-top: 8px;
  > input {
    border: 0px;
    height: 3rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 12px;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
  > svg {
    margin-left: 16px;
  }
`;
