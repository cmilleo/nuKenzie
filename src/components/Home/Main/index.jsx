import React, { useState, useEffect } from "react";

import { Container } from "./styles";

import FormEntryMobile from "../FormEntryMobile";
import noEntry from "../../../assets/NoCard.svg";
import EntryesContainer from "../EntryesContainer";
import TotalEntrys from "../TotalEntrys";
import FormEntryDesktop from "../FormEntryDesktop";

const Main = ({ filterAplied }) => {
  const [entries, setEntries] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <Container>
      <div className="div-formAndTotal">
        {windowSize < 900 ? (
          <FormEntryMobile entries={entries} setEntries={setEntries} />
        ) : (
          <FormEntryDesktop entries={entries} setEntries={setEntries} />
        )}
        <TotalEntrys entries={entries} />
      </div>

      {entries.length === 0 ? (
        <main className="mainEmpty">
          <h3>Você ainda não possui nenhum lançamento</h3>
          <img src={noEntry} alt="" />
        </main>
      ) : (
        <EntryesContainer
          filterAplied={filterAplied}
          entries={entries}
          setEntries={setEntries}
        ></EntryesContainer>
      )}
    </Container>
  );
};

export default Main;
