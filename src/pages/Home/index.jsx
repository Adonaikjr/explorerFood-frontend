import { ContainerHome, Section, Title, ContainerArticle } from './styled'
import { TranslateImg } from '../../components/TranslateImg'

export function Home() {
  return (
    <ContainerHome>
      <ContainerArticle>
        <Section>
          <TranslateImg />
          <Title>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </Title>
        </Section>
      </ContainerArticle>
    </ContainerHome>
  )
}
