import styled from "styled-components";

export const ContainerButton = styled.button`
    width:100%;
    border-radius: 5px;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }

`