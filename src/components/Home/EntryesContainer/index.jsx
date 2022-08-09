import React from "react";
import Entryes from "../../Entryes";
import { Container } from "./styles";

const EntryesContainer = ({ filterAplied, entries, setEntries }) => {
  function renderFiltered() {
    if (filterAplied === "todo") {
      return entries;
    } else {
      return entries.filter((entry) => entry.tipo === filterAplied);
    }
  }
  const render = renderFiltered();
  return (
    <Container>
      {render.map((entry) => (
        <Entryes entry={entry} entries={entries} setEntries={setEntries} />
      ))}
    </Container>
  );
};
export default EntryesContainer;
