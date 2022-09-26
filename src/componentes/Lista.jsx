import React from "react";
import { useState } from "react";
import Formulario from "./Formulario";

const Lista = () => {
  const [lista, setLista] = useState([]);

  const agregarDatos = (datos) => {
    console.log(datos);
    setLista((old) => [...old, datos]);

    console.log(lista);
  };
  return (
    <>
      <Formulario agregarDatos={agregarDatos} />
      {lista.map((item) => (
        <li key={1}>{item.nombre}</li>
      ))}
    </>
  );
};

export default Lista;
