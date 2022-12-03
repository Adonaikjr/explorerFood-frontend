import styled from "styled-components";

export const ContainerNoteItem = styled.div`
        display:flex;
        align-items:center;

        background-color: 
        ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.GRAY_300};
        border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none' };
        margin-bottom:8px;
        border-radius:10px;
        padding-right:16px;
        >button{
            border:none;
            background:none;
         
        }
        .button_delete{
                color: ${({theme}) => theme.COLORS.RED};
            }
        .button_add{
                color: ${({theme}) => theme.COLORS.ORANGE};
            }
        >input{
            height:56px;
            width:100%;
            color: ${({theme}) => theme.COLORS.WHITE};
            padding:12px;
            border:none;
            background:transparent;
            &::placeholder{
                color: ${({theme}) => theme.COLORS.GRAY_300};

            }
        }
`