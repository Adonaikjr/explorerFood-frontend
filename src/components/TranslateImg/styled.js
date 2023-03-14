import styled from "styled-components";
import img1 from "../../assets/mask.svg";
export const Container = styled.div`
  //border: solid;
  opacity: 0.9;
  width: 35rem;
  height: 25.43rem;
  z-index: 1;
  /* background-image: url(${img1}); */
  background-repeat: no-repeat;
  background-position: center;

  background-image: linear-gradient(to top, transparent 0%, transparent 90%), url(${img1});

  display: flex;
  margin-top: -9.37rem;
   

  position: relative;
  animation: mymove ;
  animation-duration: 2s;


@keyframes mymove {
  from {left: -200px;}
  to {left: 0px;}
}

  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  /* animation: topdown 1s; */
  /* /* @keyframes topdown {
    0% {
        transition: 1s;
      opacity: 0;
      transform: translateY(0);
    }

    100% {
        transition: 1s;
      opacity: 1;
      transform: translateY(90);
    }
  }

  @keyframes downtop {
    
    0% {
        transition: 1s;
      opacity: 0;
      transform: translateX(200px);
    }

    100% {
        transition: 1s;
      opacity: 1;
      transform: translateX(0);
    } 
  } */
`;
