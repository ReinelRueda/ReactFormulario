import React, { useState } from "react";

const Formulario = ({ agregarDatos }) => {
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
    agregarDatos(datos);
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
    </div>
  );
};

export default Formulario;
