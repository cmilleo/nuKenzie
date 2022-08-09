import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: #f8f9fa;
  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .header-div h1 {
    font-size: 2rem;
    font-weight: 800;
  }
  h1 strong {
    color: var(--color-primary);
  }
  div {
    text-align: center;
    width: 30%;
  }
  .header-div {
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
  }
  @media screen and (min-width: 600px) {
    div {
      width: 20%;
    }
  }
  @media screen and (min-width: 900px) {
    div {
      width: 10%;
    }
  }
  @media screen and (min-width: 1300px) {
    div {
      width: 8%;
    }
    .header-div {
      width: 70%;
    }
  }
  @media screen and (min-width: 1440px) {
    div {
      width: 8%;
    }
    .header-div {
      width: 64%;
    }
  }
  @media screen and (min-width: 1550px) {
    div {
      width: 8%;
    }
    .header-div {
      width: 58%;
    }
  }
  @media screen and (min-width: 1700px) {
    div {
      width: 10%;
    }
    .header-div {
      width: 53%;
    }
  }

  @media screen and (min-width: 1920px) {
    .header-div {
      width: 47%;
    }
  }
`;
