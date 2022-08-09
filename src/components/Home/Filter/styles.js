import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  font-family: "Nunito";
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10%;
  margin-top: 10px;
  div {
    display: flex;
    gap: 20px;
  }
  button {
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: var(--gray-2);
    padding: 0 10px;
  }
  .buttonFilter {
    background-color: var(--color-primary);
    color: var(--gray-1);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: flex-end;
    gap: 7%;
    max-width: 560px;
    width: 60%;
    margin-right: 7%;
  }
  @media screen and (min-width: 1024px) {
    gap: 22%;
  }
  @media screen and (min-width: 1200px) {
    gap: 22%;
    margin-right: 13%;
  }
  @media screen and (min-width: 1300px) {
    gap: 22%;
    margin-right: 15%;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 19%;
  }
  @media screen and (min-width: 1550px) {
    margin-right: 21%;
  }
  @media screen and (min-width: 1700px) {
    margin-right: 24%;
  }
  @media screen and (min-width: 1920px) {
    margin-right: 27%;
  }
`;
