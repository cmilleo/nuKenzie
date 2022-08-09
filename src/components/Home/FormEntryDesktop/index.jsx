import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const FormEntryDesktop = ({ entries, setEntries }) => {
  const { register, handleSubmit } = useForm();
  const [entryOrOut, setEntryOrOut] = useState("Entrada");
  const [hiddenToggle, setHiddenToggle] = useState(true);

  function handlerEntryChangeClick(e) {
    e.preventDefault();
    e.target.innerText === "Entrada"
      ? setEntryOrOut("Entrada")
      : setEntryOrOut("Despesa");
    handleToggleSelect();
  }

  function handleToggleSelect() {
    setHiddenToggle(!hiddenToggle);
  }

  function onSubmit(values) {
    if (values.descricao && values.valor) {
      values.tipo = entryOrOut.toLowerCase();
      values.id = uuidv4();
      const newEntrie = [...entries, values];
      setEntries(newEntrie);
      toast.success("Lançamento adicionado com sucesso");
      values = {};
    } else {
      toast.error("Preencha todos os campos");
    }
  }

  return (
    <Container hiddenToggle={hiddenToggle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-container">
          <label>Descrição</label>
          <input
            {...register("descricao")}
            type="text"
            placeholder="Digite aqui sua descrição"
          />
          <small>Ex: compra de roupas</small>
          <div className="div-form-values">
            <div className="div-value-type">
              <label>Valor</label>
              <input {...register("valor")} type="number" />
              <span>R$</span>
            </div>
            <div className="div-select">
              <label htmlFor="">Tipo de valor</label>
              <div className="select">
                <p onClick={handleToggleSelect}>{entryOrOut}</p>
                <span onClick={handleToggleSelect}>
                  <IoIosArrowDown />
                </span>
                <button
                  onClick={handlerEntryChangeClick}
                  className="hiddenButton"
                >
                  Entrada
                </button>
                <button
                  onClick={handlerEntryChangeClick}
                  className="hiddenButton"
                >
                  Despesa
                </button>

                <div className="select_arrow"></div>
              </div>
            </div>
          </div>
        </div>
        <input type="submit" value="Inserir Valor" />
      </form>
    </Container>
  );
};

export default FormEntryDesktop;
