import React from "react";
import '../stylesheets/Boton.css';

const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

function Boton(props) {
  return (
    <div 
      className={`contenedor-boton ${esOperador(props.children) ? 'operador' : ''}`}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;