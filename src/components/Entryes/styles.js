import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.div`
  width: 90%;
  background-color: var(--gray-1);
  height: 60px;
  min-height: 60px;
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--gray-4);
  margin-top: 8px;
  :hover {
    box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
    background-color: #fff;
  }

  ${({ entry }) => {
    if (entry.tipo === "entrada") {
      return css`
        border-left: 4px solid var(--color-secondary);
      `;
    } else {
      return css`
        border-left: 4px solid var(--gray-2);
      `;
    }
  }}

  span,
  p,
  button {
    color: var(--gray-4);
    text-transform: capitalize;
  }
  .entryType {
    color: var(--gray-3);
    font-size: 0.8rem;
  }
  p {
    max-width: 200px;
    line-height: 15px;
    font-weight: 700;
  }
  button {
    background: #e9ecef;
    border-radius: 2.46154px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 22px;
    height: 22px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-3);
    z-index: 0;
  }
  button:hover {
    color: #fff;
    background-color: var(--gray-3);
  }
  @media screen and (min-width: 900px) {
    width: 95%;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 15px;
    height: 80px;
    .entryType {
      font-size: 12px;
    }
    p {
      font-size: 16px;
    }
  }
`;
