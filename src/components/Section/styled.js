import styled from "styled-components";

export const ContainerSection = styled.div`
    margin:28px 0;
    >h2{
        margin-left: 16px;
        border-bottom-width:1px;
        border-bottom-style:solid;
        border-bottom-color:${({theme}) => theme.COLORS.BACKGROUND_700};
        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size:20px;
        font-weight:400;
    }
`