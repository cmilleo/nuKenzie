import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
