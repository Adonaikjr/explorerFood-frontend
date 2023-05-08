import styled from "styled-components";

export const ContainerFooter = styled.footer`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.secondBackground};
  img {
    width: 8.8rem;
    height: 1.14rem;
    margin: 1rem;
  }
  p {
    font-size: 12px;
    margin: 1rem;
  }
`;
