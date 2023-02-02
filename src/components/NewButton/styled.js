import styled from 'styled-components';

export const Container = styled.button`

  background-color: ${({theme}) => theme.COLORS.styleButton};
  border-radius: 3px;
  border: solid transparent;
  color: ${({theme}) => theme.COLORS.WHITE};
  width: 21.75rem;
  height: 3rem;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  background-image: -webkit-linear-gradient(50deg, red 50%, transparent 50%);
  background-image: linear-gradient(45deg, red 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: 300ms ease-in-out;
  transition:  500ms ease-in-out;
transition: 1s;
:hover {
  transition: 1s;
  background-position: 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

`
