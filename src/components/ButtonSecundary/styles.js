import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  button {
    width: 100%;
    padding: 13px 20px;
    background: var(--gray-2);
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border: none;
    color: var(--gray-3);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--gray-3);
    color: var(--gray-1);
  }
`;
