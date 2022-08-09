import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 90%;
  width: 90%;
  margin: 0 auto;
  ::-webkit-scrollbar {
    width: 4px;
    background-color: var(--gray-2);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-3);
    border-radius: 6px;
    width: 4px;
  }
  .mainEmpty {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 560px;
    max-height: 367px;
    z-index: 100;
    margin-top: 10px;
  }
  main h3 {
    margin-top: 10px;
    font-size: 0.9rem;
  }
  main img {
    width: 100%;
    margin-top: 20px;
  }
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    .mainEmpty {
      margin: 0;
      width: 560px;
      max-width: 560px;
    }
    .div-formAndTotal {
      display: flex;
      flex-direction: column;
      width: 350px;
      gap: 16px;
      margin-top: -20px;
    }
    h3 {
      font-size: 16px;
    }
    main img {
      max-width: 560px;
    }
  }
`;
