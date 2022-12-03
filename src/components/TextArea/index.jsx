import { ContainerTextArea } from "./styled";

export function TextArea( { value, ...rest } ){
    return(
        <ContainerTextArea {...rest} >
            {value}
        </ContainerTextArea>
    )
}