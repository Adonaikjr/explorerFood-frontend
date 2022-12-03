import styled from 'styled-components';

export const Container = styled.div`
h1{
    font-family: Poppins;
font-size: 32px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: center;

}


  button{
    margin-top: 32px;
  }
`;

export const Content = styled.div`
height: 100vh;

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap:wrap;
`
export const Article = styled.div`
  

`
export const Main = styled.div`

height:37.5rem;
`

export const Section = styled.section`
    display: flex;
    align-items: center;
    img{
        margin-right: 19.01px;
    }
`

export const Form = styled.form`
padding-bottom:64px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    height:37.5rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    >h1{
      text-align: center;
      width:100%;
      margin-top: 4rem;
      
    }



    input{
      margin-right: 4rem;
        margin-left:4rem;
        width: 21.75rem;
        height: 3rem;
        border: 1px solid ${({theme})=>theme.COLORS.BORDER_INPUT};
        border-radius: 5px;
        background: transparent;
        padding-left: 8px;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: Roboto;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
       
    }

    button{
      margin-left:4rem;
      margin-right:4rem;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;

    }

    a{
      text-decoration: none;
      color: ${({theme}) => theme.COLORS.WHITE} ;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;

    }

`
export const Fieldset = styled.div`

display:flex;
flex-direction: column;
h4{
  
     
      margin-bottom: 1rem;
      margin-top:2rem;
      margin-left:4rem;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
     
    }
 
`