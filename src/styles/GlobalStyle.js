import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --color-primary: #FD377E;
    --color-primary2: #E34981;
    --color-secondary: #03B898;
    --gray-4: #212529;
    --gray-3: #868E96;
    --gray-2: #E9ECEF;
    --gray-1: #F8F9FA;


}
html{
    font-size: 62,5%;
}

body{
    height: 100vh;
    width: 100vw;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
}
*{
    font-family: 'Nunito';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
}
::-webkit-scrollbar {
    width: 8px;
    background-color: var(--gray-2);
    border-radius: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--gray-3);
    border-radius: 6px;
    width: 8px;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
