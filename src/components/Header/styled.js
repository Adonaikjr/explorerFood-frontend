import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    grid-area: header;
    height: 105px;
    width:100%;
    border-bottom-width:1px;
    border-bottom-style:solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
`

export const ContainerProfile = styled(Link)`
    display: flex;
    align-items: center;
    height:56px;
    >img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
    >div{
        display:flex;
        flex-direction: column;

        margin-left: 16px;
        line-height: 24px;
        span{
            font-size:14px;
            color:${({theme}) => theme.COLORS.GRAY_100};

        }
        strong{
            font-size:18px;
            color:${({theme}) => theme.COLORS.WHITE};
        }
    }
`

export const ContainerLogout = styled.button`
    border: none;
    background:none;
    >svg{
        cursor: pointer;
        color:${({theme}) => theme.COLORS.GRAY_100};
        font-size: 24px;
    }

`