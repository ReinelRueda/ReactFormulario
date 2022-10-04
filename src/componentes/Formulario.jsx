import React, { useState } from "react";
import { useEffect } from "react";
import Lista from "./Lista";
import Tareas from "./Tareas";

const Formulario = ({ agregarDatos, lista, eliminar }) => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarDatos({
      nombre: datos.nombre,
      apellido: datos.apellido,
      id: Date.now(),
    });
  };
  console.log(datos);

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleChange}
          value={datos.nombre}
        />
        <input
          type="text"
          name="apellido"
          onChange={handleChange}
          value={datos.apellido}
        />
        <button>Enviar</button>
      </form>

      <Tareas lista={lista} eliminar={eliminar} />
    </div>
  );
};

export default Formulario;
