import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  height: 367px;
  z-index: 100;
  margin-top: 10px;
  @media screen and (min-width: 900px) {
    width: 100%;
    height: 600px;
    max-width: 560px;
  }
`;
