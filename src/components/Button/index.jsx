import { ContainerButton } from "./styled";

export function Button({ title, loading = false, icon, ...rest }) {
  return (
    <ContainerButton type="button" disabled={loading} {...rest}>
      {icon && <img src={icon} />}
      {loading ? "Carregando..." : title}
    </ContainerButton>
  );
}
