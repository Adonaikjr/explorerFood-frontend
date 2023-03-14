import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0 auto;
        padding: 0 auto;
        box-sizing: border-box;
    }

    body{
        max-width: 1386px;
     //   width: 100%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto Slab', serif;
        ::-webkit-scrollbar {
            width: 5px;
        }
        ::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
        ::-webkit-scrollbar-button {
            background-color: ${({ theme }) => theme.COLORS.secondBackground};
        }
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #0d1d25, #00111a);
        }
        
    }
    button{
        cursor: pointer;
    }
    border-style, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }
    a{
        text-decoration: none;
    }


`;
