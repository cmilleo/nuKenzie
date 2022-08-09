import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-4);
  overflow: hidden;

  section h2 {
    color: #fff;
    font-weight: 800;
    font-size: 1.6rem;
  }
  section h2 small {
    font-size: 1.6rem;
    color: var(--color-primary);
  }
  p {
    font-size: 2rem;
    color: #fff;
    font-weight: 800;
  }
  span {
    font-weight: 400;
    color: #fff;
    font-size: 0.9rem;
  }
  section {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;
    align-items: center;
    animation: fadeInContentInit 1s ease-in-out backwards;
    animation-delay: 2s;
  }
  button {
    width: 70%;
  }
  @keyframes fadeInContentInit {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
    flex-direction: row-reverse;
    section {
      gap: 0;
      text-align: left;
      align-items: flex-start;
      height: 320px;
      width: 350px;
    }
    p {
      width: 90%;
    }
  }
  @media screen and (min-width: 1440px) {
    padding: 0 15%;
    button {
      font-size: 16px;
      width: 241px;
    }
    span {
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1700px) {
    padding: 0 18%;
  }
`;
