import React, { useState } from "react";
import { useEffect } from "react";
import Lista from "./Lista";
import Tareas from "./Tareas";

const Formulario = ({ agregarDatos, lista, eliminar }) => {
  const actualizar = (item) => {
    setDatos({
      nombre: item.nombre,
      apellido: item.apellido,
    });
  };

  const [datos, setDatos] = useState({ nombre: "", apellido: "", id: {} });

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

      <Tareas lista={lista} eliminar={eliminar} actualizar={actualizar} />
    </div>
  );
};

export default Formulario;
