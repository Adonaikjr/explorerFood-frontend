import styled from "styled-components";

export const ContainerOrder = styled.div`
  table {
    margin-top: 1rem;
    width: 100%;
    //background-color: ${({ theme }) => theme.COLORS.inputBackground};
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};
    border-radius: 5px;
    padding: 2rem;

    th {
      border: 2px solid ${({ theme }) => theme.COLORS.GRAY_800};
      border-radius: 5px;
      padding: 1rem;
    }
    thead {
      vertical-align: bottom;
    }
    td {
      text-align: center;
      background-color: transparent;
      //background-color: ${({ theme }) => theme.COLORS.inputBackground};
      > div {
        background-color: transparent;
        > input {
          background-color: transparent;
          width: 50%;
        }
      }
    }
  }
`;
