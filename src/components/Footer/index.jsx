/* eslint-disable prettier/prettier */
import { Container, Logo } from "../ContainerHader/styled";
import polygon from "../../assets/logo.svg";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <Container>
      <Link to="/new">
        <Logo>
          <img src={polygon} alt="polyg" />
        </Logo>
      </Link>
    </Container>
  );
}
