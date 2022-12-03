import styled from "styled-components";
import background from '../../assets/logo.svg'
export const ContainerSignin = styled.div`
height: 100vh;
width:100%;
display: flex;
align-items: center;
flex-direction: row-reverse;
justify-content: center;
flex-wrap: wrap;

`
export const Form = styled.form`
fieldset{
    border: transparent;
    width: 348px;
    input{
        height:48px;
    }
    >button{
        margin-top: 32px;
        background: ${({ theme }) => theme.COLORS.styleButton};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
}

    margin-top:50px;
    height:600px;
    border-radius: 16px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    >h1{
        margin-bottom: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size:48px;
    }
    >h2{
        font-size: 24px;
        margin-top: 48px;
        margin-bottom:24px;
    }
    >p{
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

    }
    >a{
        margin-top:32px;
        margin-bottom:64px;
        color: ${({ theme }) => theme.COLORS.WHITE};

    }
`

export const Background = styled.div`
    flex:1;
    height: 5rem;
    background: url(${background}) no-repeat center center;

`