import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  button {
    width: 100%;
    padding: 13px 20px;
    background: var(--color-primary);
    border: 2px solid #fd377e;
    border-radius: 8px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: var(--gray-1);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary2);
  }
`;
