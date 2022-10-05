import React from "react";

const Tareas = ({ lista, eliminar, actualizar }) => {
  return (
    <>
      {lista.map((item) => (
        <li key={item.id}>
          {item.nombre}
          {item.apellido}
          <button onClick={() => eliminar(item.id)}>X</button>
          <button
            onClick={() =>
              actualizar({
                nombre: item.nombre,
                apellido: item.apellido,
                id: item.id,
              })
            }
          >
            O
          </button>
        </li>
      ))}
    </>
  );
};

export default Tareas;
