import { Link, useNavigate } from "react-router-dom";
import { Container } from "./styled";
import { TiArrowBack } from "react-icons/all";

export function Error() {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <Container>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          paddingTop: 35,
        }}
        onClick={handleBack}
      >
        <TiArrowBack size={50} color="FFF" />
      </button>
      <h1>404 OoOoPss...</h1>
      <h3>
        A pagina que você está tentando acessar<span> não existe</span>
      </h3>
    </Container>
  );
}
