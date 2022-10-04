import React from "react";
import { useState } from "react";
import Formulario from "./Formulario";

const Lista = () => {
  const [lista, setLista] = useState([]);

  const agregarDatos = (datos) => {
    setLista((old) => [...old, datos]);
  };
  function eliminar(id) {
    setLista((old) => old.filter((item) => item.id !== id));
  }

  return (
    <>
      <Formulario
        agregarDatos={agregarDatos}
        lista={lista}
        eliminar={eliminar}
      />
    </>
  );
};

export default Lista;
