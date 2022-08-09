import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  min-width: 320px;
  min-height: 320px;
  top: 30px;
  margin: 0 auto;
  box-sizing: border-box;

  div {
    background: rgba(224, 100, 204, 0.05);
    width: 90%;
    height: 90%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    margin: 0 auto;
  }
  div:nth-child(1) {
    animation: scaleCircles 1.5s ease-out forwards;
  }
  img {
    position: absolute;
  }
  .frame3Index {
    z-index: 1;
    height: 58%;
    top: 15%;
    margin: auto;
    left: 0;
    right: 0;
    animation: fadeInMoveLeft 1s ease-in backwards;
    animation-delay: 1.4s;
  }
  .frame2Index {
    z-index: 3;
    width: 58%;
    top: 32%;
    margin: auto;
    left: -19%;
    right: 0;
    animation: fadeInMoveRight 1s ease-in backwards;
    animation-delay: 1.5s;
  }
  .frame1Index {
    z-index: 2;
    width: 43%;
    top: 44%;
    margin: auto;
    left: 12%;
    right: 0;
    animation: fadeInMoveLeft 1s ease-in backwards;
    animation-delay: 1.7s;
  }
  @keyframes scaleCircles {
    from {
      transform: scale(0);
      filter: blur(20px);
    }
    to {
      filter: blur(0px);
      transform: scale(1);
    }
  }
  @keyframes fadeInMoveRight {
    from {
      opacity: 0;
      filter: blur(2px);
      transform: translateX(-30%);
    }
    to {
      opacity: 1;
      filter: blur(0px);
      transform: translateX(0px);
    }
  }
  @keyframes fadeInMoveLeft {
    from {
      opacity: 0;
      filter: blur(2px);
      transform: translateX(+40%);
    }
    to {
      opacity: 1;
      filter: blur(0px);
      transform: translateX(0px);
    }
  }
  @media screen and (min-width: 768px) {
    min-width: 500px;
    width: 500px;
    min-height: 500px;
    height: 500px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 590px;
    width: 590px;
    min-height: 590px;
    height: 590px;
  }
`;
