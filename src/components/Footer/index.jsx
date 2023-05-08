/* eslint-disable prettier/prettier */
import { ContainerFooter } from "./styled";
import LogoFooter from "../../assets/footer.svg";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <ContainerFooter>
      <img src={LogoFooter} alt="logo" />
      <p>©2023 Todos os direitos reservados.</p>
    </ContainerFooter>
  );
}
