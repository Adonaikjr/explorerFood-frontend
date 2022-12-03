import { ContainerTags } from "./styled";

export function Tags({title, ...rest}){
    return(
        <ContainerTags {...rest} >
            {title}
        </ContainerTags>
    )
}