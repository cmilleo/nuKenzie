import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import ImgAnimation from "../../components/Initial/ImgAnimation";
import { createBrowserHistory } from "history";
import { Container } from "./styles";

const Initial = () => {
  const history = createBrowserHistory();

  function handleGoToHomeClick() {
    history.push("/home");
    history.go();
  }
  return (
    <>
      <Container>
        <ImgAnimation />
        <section>
          <h2>
            <small>Nu</small> Kenzie
          </h2>
          <p>Centralize o controle das suas finanças</p>
          <span>de forma rápida e segura</span>
          <ButtonPrimary onClick={handleGoToHomeClick}>Entrar</ButtonPrimary>
        </section>
      </Container>
    </>
  );
};

export default Initial;
