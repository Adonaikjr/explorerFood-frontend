import styled from "styled-components";

export const Container = styled.div`
    color:white;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 30px;
    a{
        padding:12px;
        text-decoration: none;
        color:${({theme}) => theme.COLOR.text_color};
    }
`