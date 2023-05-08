import styled from "styled-components";
import img1 from "../../assets/mask.svg";
import img2 from "../../assets/pngegg2.png";
export const Container = styled.div`
  //border: solid;
  opacity: 0.9;
  /* background-image: url(${img1}); */
  background-repeat: no-repeat;
  background-position: center;
  background-image: linear-gradient(to top, transparent 0%, transparent 90%),
    url(${img1});
  background-size: cover;
  width: 50%;
  height: 25.78rem;
  margin-bottom: 10rem;
  display: flex;
  animation: mymove;
  animation-duration: 2s;
  @keyframes mymove {
    from {
      left: -200px;
    }
    to {
      left: 0px;
    }
  }
  @media (max-width: 900px) {
    margin-bottom: 0px;
    background-image: linear-gradient(to top, transparent 0%, transparent 90%),
      url(${img2});
    width: 100%;
    height: 10rem;
    margin-top: -2.8rem;
  }
`;
