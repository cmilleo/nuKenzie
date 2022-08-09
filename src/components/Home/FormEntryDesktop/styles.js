import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  font-family: "Inter";
  z-index: 1;
  width: 350px;
  height: 340px;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    background: var(--gray-1);

    border: 2px solid var(--gray-1);
    border-radius: 8px;
    cursor: pointer;
    height: 50px;
    padding: 0 10px;
    font-size: 1.1rem;
  }
  input:hover {
    color: #212529;
    background: #f8f9fa;
    border: 1.2px solid #212529;
  }

  input[type="submit"] {
    width: 90%;
    min-height: 48px;
    color: white;
    background: #fd377e;
    border: 2px solid #fd377e;
    border-radius: 8px;
    margin: 0 auto;
  }
  input[type="submit"]:hover {
    border: none;
    background-color: var(--color-primary2);
    border: 2px solid #e34981;
  }
  form {
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    width: 90%;
    margin: 0 auto;
    height: 100%;
    margin-top: 20px;
    position: relative;
  }
  .select {
    font-family: "Inter", sans-serif;
    position: relative;
    background-color: var(--gray-1);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }
  .select span {
    position: absolute;
    top: 25%;
    right: 9%;
    color: var(--gray-3);
    cursor: pointer;
  }
  .select p {
    font-family: "Inter", sans-serif;
    color: var(--gray-3);
    border-radius: 8px;
    height: 50px;
    padding: 11px 10px;
  }
  .select p:hover {
    color: var(--gray-4);
    border: 1.2px solid #212529;
    cursor: pointer;
  }
  small {
    font-family: "Inter", sans-serif;
    color: var(--gray-3);
    font-size: 12px;
  }
  .select button {
    font-size: 1.2rem;
    border: none;
    background-color: var(--gray-1);
    color: var(--gray-3);
    border-radius: 4px;
    cursor: pointer;
    margin-top: 2px;
    height: 40px;
    z-index: 9999;
  }
  .select button:hover {
    background-color: var(--gray-2);
    color: var(--gray-4);
  }
  label {
    font-family: "Inter", sans-serif;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  input[type="text"] {
    width: 100%;
  }
  .div-form-values {
    display: flex;
    width: 90%;
    margin: 0 auto;
    gap: 10%;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .div-value-type {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-top: 10%;
    margin-bottom: 10%;
    position: relative;
  }
  .div-value-type span {
    position: absolute;
    top: 49px;
    right: 21%;
    font-size: 16px;
  }
  input[type="number"] {
    width: 120px;
  }
  .div-select {
    display: flex;
    flex-direction: column;
    width: 150px;
    margin-top: 29px;
    position: absolute;
    right: 7px;
  }
  ${({ hiddenToggle }) => {
    if (hiddenToggle) {
      return css`
        button {
          display: none;
        }
      `;
    } else {
      return css`
        button {
          display: block;
        }
        .select p {
          color: var(--gray-4);
          border: 1.2px solid #212529;
        }
        .select span {
          color: var(--gray-4);
          top: 4%;
          transform: rotate(180deg);
        }
      `;
    }
  }}
  input {
    height: 52px;
    font-size: 16px;
  }
  ruby-span,
  p {
    font-size: 16px;
  }
`;
