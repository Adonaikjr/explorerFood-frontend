import { Link } from "react-router-dom"
import { Container } from "./styled"

export function Error(){
    return(
        <Container>
            <h1>404 OoOoPss...</h1>
            <h3>A pagina que você está tentando acessar<span> não existe</span></h3>
        </Container>
    )
}