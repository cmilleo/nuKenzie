import React from "react";
import { Container } from "./styles";

const ButtonSecundary = ({ onClick, children }) => {
  return (
    <Container>
      <button onClick={onClick}>{children}</button>
    </Container>
  );
};

export default ButtonSecundary;
