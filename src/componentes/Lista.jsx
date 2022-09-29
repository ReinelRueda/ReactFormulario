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
  function eliminar(id) {
    setLista((old) => old.filter((item) => item.id !== id));
  }
  return (
    <>
      <Formulario agregarDatos={agregarDatos} />
      {lista.map((item) => (
        <li key={item.id}>
          {item.nombre}
          {item.apellido}
          <button onClick={() => eliminar(item.id)}>X</button>
        </li>
      ))}
    </>
  );
};

export default Lista;
