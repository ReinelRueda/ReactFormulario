import React from "react";

const Tareas = ({ lista, eliminar }) => {
  return (
    <>
      {lista.map((item) => (
        <li key={item.id}>
          {item.nombre}
          {item.apellido}
          <button onClick={() => eliminar(item.id)}>X</button>
          <button onClick={() => actualizar(item)}>O</button>
        </li>
      ))}
    </>
  );
};

export default Tareas;
