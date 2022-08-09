import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  font-family: "Inter";
  z-index: 1;
  input {
    background: var(--gray-1);

    border: 2px solid var(--gray-1);
    border-radius: 8px;
    cursor: pointer;
    height: 50px;
    padding: 0 10px;
    font-size: 1.1rem;
  }
  span:first-child {
    position: absolute;
    top: 10px;
    right: 10%;
    padding: 5px 10px;
    border-radius: 8px;
    background: var(--gray-2);
    color: var(--gray-3);
    text-align: center;
  }
  span:first-child:hover {
    background: var(--gray-4);
    color: var(--gray-1);
  }
  input:hover {
    color: #212529;
    background: #f8f9fa;
    border: 1.2px solid #212529;
  }

  input[type="submit"] {
    width: 100%;
    background-color: var(--color-primary);
    border-radius: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    color: var(--gray-1);
    height: 60px;
    font-size: 1.6rem;
    font-weight: 500;
    border: 2px solid var(--color-primary);
    z-index: 9999;
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
    position: absolute;
    top: 4%;
    height: 100%;
  }
  .select {
    font-family: "Inter", sans-serif;
    position: relative;
    width: 120px;
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
    height: 40px;
    padding: 5px 10px;
    border-radius: 8px;
  }
  .select p:hover {
    color: var(--gray-4);
    border: 1.2px solid #212529;
    cursor: pointer;
  }
  small {
    font-family: "Inter", sans-serif;
    margin-left: 10%;
    color: var(--gray-3);
    font-size: 0.8rem;
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
    margin-left: 10%;
    margin-top: 10%;
  }
  input[type="text"] {
    margin-left: 10%;
    width: 85%;
  }
  .div-form-values {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    gap: 10%;
  }
  .div-form-values label,
  .div-form-values input {
    margin: 0;
  }
  .div-value-type {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-top: 10%;
    margin-bottom: 10%;
    position: relative;
  }
  .div-value-type span {
    position: absolute;
    top: 50%;
    right: 10%;
  }
  .form-container {
    background-color: #fff;
    border-radius: 8px;
    height: 100%;
    padding: 30px 0;
    display: hidden;
    z-index: 1;
  }
  ${({ menuAddEntryHidden }) => {
    if (!menuAddEntryHidden) {
      return css`
        .form-container {
          display: block;
          animation: closeEntry 1s ease-in-out forwards;
        }
        form {
          animation: closeForm 0.1s ease-in-out forwards;
          animation-delay: 1s;
        }
      `;
    } else {
      return css`
        .form-container {
          display: block;
          animation: openEntry 1s ease-in-out backwards;
        }
      `;
    }
  }}
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
  @keyframes openEntry {
    0% {
      transform: translateY(150%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes closeEntry {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(+150%);
      display: none;
    }
  }
  @keyframes closeForm {
    0% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
  @media screen and (min-width: 600px) {
    form {
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: 3%;
    }
    .div-value-type {
      margin-top: 2%;
      margin-bottom: 2%;
    }
  }
`;
