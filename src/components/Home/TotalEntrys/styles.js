import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 10px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  position: absolute;
  bottom: 27%;
  left: 0;
  right: 0;
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    color: #212529;
  }
  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 30px;
    color: #fd377e;
  }
  span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #5b6166;
  }
  @media screen and (min-width: 900px) {
    position: unset;
    width: 100%;
  }
`;
