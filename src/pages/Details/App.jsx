import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tags } from "../../components/Tags";
import { ContainerSignin, ContainerLinks,Content } from "./styled";

export function App(){
  return(
    <ContainerSignin>
      <Header/>
      <main>
        <Content>
      <ButtonText title='Excluir nota' isActive/>
      <h1>Introducao ao react</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque officiis a veniam libero omnis qui quae incidunt hic maxime, suscipit ratione, provident earum dolorem ipsam ea deserunt quidem nihil corporis.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae excepturi, consequatur libero amet atque expedita necessitatibus laudantium cumque magni sint ipsum, fugiat quis architecto sequi cum facilis ut incidunt vitae.
      </p>
      <Section title='Links uteis' >
        <ContainerLinks>
          <li>
            <a href="###">https://rocketseat.com</a>
          </li>
          <li>item 2</li>
          <li>item 3</li>
        </ContainerLinks>
      </Section>
      <Section title='Marcadores'>
        <Tags title='express'/>
        <Tags title='node'/> 
      </Section>
      <Button title='Salvar'/>
      </Content>
      </main>
    </ContainerSignin>
  )
}