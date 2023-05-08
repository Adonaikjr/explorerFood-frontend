import styled from "styled-components";

export const ContainerSidebar = styled.div`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  position: relative;
  animation: sidebar;
  animation-duration: 0.5s;
  transition: 2s;
  @keyframes sidebar {
    from {
      left: -2000px;
    }
    to {
      transition: 2s;
      left: 0px;
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  header {
    height: 5.5rem;
    display: flex;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.COLORS.secondBackground};
    > div {
      display: flex;
      align-items: center;
      width: 100px;
      padding-top: 58px;
      padding-bottom: 19px;
      margin-left: 2.3rem;
      gap: 1rem;
      svg {
        display: inline-block;
        animation: rotate 0.5s linear;
      }
    }
  }
  label {
    margin-top: 36px;
    margin-bottom: 36px;
    font-size: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      width: 90%;
      background-color: ${({ theme }) => theme.COLORS.inputBackground};
      display: flex;
    }
  }

  input {
    width: 90%;
  }
  nav {
    font-family: ${({ theme }) => theme.COLORS.popinsFont};
    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    ul {
      padding-top: 36px;
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        border-bottom: 1px solid;
        height: 54px;
        display: flex;
        align-items: center;
        padding-left: 28px;
        width: 90%;
        button {
          background-color: transparent;
          color: ${({ theme }) => theme.COLORS.WHITE};
          border: none;
        }
      }
    }
  }
  main {
    height: 100%;
  }
`;
