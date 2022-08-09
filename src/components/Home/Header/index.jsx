import React from "react";
import ButtonSecundary from "../../ButtonSecundary";
import { Container } from "./styles";
import { createBrowserHistory } from "history";

const Header = () => {
  const history = createBrowserHistory();

  function handleGoToInitialClick() {
    history.push("/");
    history.go();
  }
  return (
    <Container>
      <div className="header-div">
        <h1>
          <strong>Nu</strong> Kenzie
        </h1>
        <ButtonSecundary onClick={handleGoToInitialClick}>
          Inicio
        </ButtonSecundary>
      </div>
    </Container>
  );
};

export default Header;
