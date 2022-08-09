import React from "react";
import { Container } from "./styles";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
const Entryes = ({ entries, entry, setEntries }) => {
  function handleDeleteEntry(id) {
    const newEntries = entries.filter((item) => item.id !== id);
    setEntries(newEntries);
    toast.success("Lançamento removido com sucesso");
  }

  return (
    <Container entry={entry}>
      <div>
        <p>{entry.descricao}</p>
        <span className="entryType">{entry.tipo}</span>
      </div>
      <span>R${entry.valor},00</span>
      <button onClick={() => handleDeleteEntry(entry.id)}>
        <FaTrash />
      </button>
    </Container>
  );
};

export default Entryes;
