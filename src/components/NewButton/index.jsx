import { Container } from "./styled";

export function NewButton({title, icon:Icon, children, countOrder, ...rest }){
    return(
        <Container {...rest}>
        {Icon && <Icon size={24}/>}
            <p>{title}({countOrder})</p>
        {children}
        </Container>
    )
}