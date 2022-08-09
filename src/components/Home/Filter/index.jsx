import React from "react";

import { Container } from "./styles";

const Filter = ({ setFilterAplied }) => {
  function handleFilter(e) {
    setFilterAplied(e.target.innerText.toLowerCase().slice(0, -1));
    toggleSelected(e);
  }

  function toggleSelected(e) {
    document.querySelectorAll(".buttonFilter").forEach((item) => {
      item.classList.remove("buttonFilter");
    });

    const { classList } = e.target;
    classList.toggle("buttonFilter");
  }

  return (
    <Container>
      <h3>Resumo financeiro</h3>
      <div>
        <button onClick={handleFilter} className="buttonFilter">
          Todos
        </button>
        <button onClick={handleFilter}>Entradas</button>
        <button onClick={handleFilter}>Despesas</button>
      </div>
    </Container>
  );
};

export default Filter;
