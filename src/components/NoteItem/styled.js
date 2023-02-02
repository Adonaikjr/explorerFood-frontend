import styled from "styled-components";

export const ContainerNoteItem = styled.div`
  background-color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.inputBackground : theme.COLORS.inputBackground};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  width: 100%;
  border-radius: 5px;
  button {
    width: 5rem;
    border: none;
    background-color: transparent;
  }
  .button_delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }
  .button_add {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > input {
    height: 56px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 12px;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 100%;
  }
`;
