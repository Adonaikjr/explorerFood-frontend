import styled from 'styled-components'

export const Container = styled.div`
  color: white;
  height: 100vh;
  input {
    background-color: transparent;
    border: solid 1px white;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }
  input,
  label {
    margin: 0rem 1rem 0rem 1rem;
  }
`

export const Form = styled.form`
  padding: 1rem;
`
export const BoxA = styled.div`
  display: flex;
  //border: solid;
  justify-content: space-around;
  flex-wrap: wrap;

  input {
    height: 3.5rem;
  }
  p {
    border: solid 1px white;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  margin-bottom: 1rem;
`

export const BoxB = styled(BoxA)`
  //border: solid;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  input {
    height: 3.5rem;
  }
  margin-bottom: 1rem;
`
export const BoxC = styled.div`
  //border: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  input {
    height: 12.25rem;
    width: 100%;
  }
  margin-bottom: 1rem;
  label {
    width: 100%;
  }
`

export const Title = styled.h1`
  margin: 2rem;
`

export const JustifyBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  button {
    width: 30rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 2rem;
  }
`
