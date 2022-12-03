import styled from "styled-components";

export const ContainerNew = styled.div`
    width:100;
    height:100vh;
    background-color: ${({ theme }) => theme.BACKGROUND_800};
`

export const Form = styled.form`

`

export const Article = styled.div`

`
export const BoxA = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
border: solid red;
.ajust{
  
    input{
        height: 3rem;
        border-radius: 5px;
        border: solid white;
        width: 15rem;
    }
}

`
export const AjustTitle = styled.div`

input{
    border: solid red;
    width: 53.68rem;
    border-radius: 5px;
}
`

export const NewBoxA = styled(BoxA)`
flex-direction: row-reverse;
align-items: center;
input{
    border: solid blue;
}
border: solid green;
`

export const StyleContainerButton = styled.button`
    border: solid green;
    width: 22.31rem;
    height: 3rem;

`