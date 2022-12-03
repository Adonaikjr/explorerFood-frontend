import styled from "styled-components";

export const ContainerButtonText = styled.button`
    background:none;
    color: ${({theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
    cursor: pointer;
    border:none;
    font-size:16px;
`