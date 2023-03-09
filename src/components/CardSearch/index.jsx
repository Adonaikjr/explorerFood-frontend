import {ContainerCardSearch} from './styled'

export function CardSearch({ title, description, to }) {
  return (
    <ContainerCardSearch to={to}>
      <h3>{title}</h3>
      <p>{description}</p>
    </ContainerCardSearch>
  );
}
