import { Container } from "./styled";

export function NewButton({title, icon:Icon, children, ...rest}){
    return(
        <Container {...rest}>
        {Icon && <Icon size={24}/>}
            <p>{title}</p>
        {children}
        </Container>
    )
}