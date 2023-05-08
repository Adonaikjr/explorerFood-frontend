import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCardSearch = styled.div`
  cursor: pointer;
  position: relative;
  animation: sidebar;
  animation-duration: 0.5s;
  transition: 2s;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.secondBackground};
  p {
    margin: 0.5rem;
  }
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
