import { ContainerSection } from "./styled";

export function Section({title, children}){
    return(
        <ContainerSection>
            <h2>{title}</h2>
            {children}
        </ContainerSection>
    )
}