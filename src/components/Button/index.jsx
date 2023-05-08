import { ContainerButton } from "./styled";

export function Button({ title, loading = false, icon, active=false, ...rest }) {
  return (
    <ContainerButton active={active} type="button" disabled={loading} {...rest}>
      {icon && <img src={icon} />}
      {loading ? "Carregando..." : title}
    </ContainerButton>
  );
}
