import styled from "styled-components";

export const ContainerTextArea = styled.textarea`
    height: 15rem;
    width: 74rem;
    background: #000a0f;
    margin-left:3rem;

    border: solid 1px white;
    resize:none;
    border-radius:5px;
    padding: 1rem;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
        
    }
`