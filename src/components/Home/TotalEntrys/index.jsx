import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "./styles";

const TotalEntrys = ({ entries }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const saldo = entries.reduce((acc, entry) => {
      if (entry.tipo === "entrada") {
        return acc + Number(entry.valor);
      } else {
        return acc - Number(entry.valor);
      }
    }, 0);
    setTotal(saldo);
  });

  return (
    <Container>
      <div>
        <p>Valor total:</p>
        <span>O valor se refere ao saldo</span>
      </div>
      <h2>R$ {total},00</h2>
    </Container>
  );
};

export default TotalEntrys;
