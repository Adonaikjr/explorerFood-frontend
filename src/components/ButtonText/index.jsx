import { ContainerButtonText } from "./styled";

export function ButtonText({title, isActive = false ,...rest}){
    return(
        <ContainerButtonText type='button' {...rest} isActive={isActive}>
            {title}
        </ContainerButtonText>
    )
}