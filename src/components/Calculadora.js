import React from "react";
import '../stylesheets/Calculadora.css';
import Boton from "./Boton";
import BotonClear from "./BotonClear";
import Pantalla from "./Pantalla";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculadora() {

  const teclado = [ ['1', '2', '3', '+'],
                    ['4', '5', '6', '-'],
                    ['7', '8', '9', '*'],
                    ['=', '0', '.', '/']];

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los calculos.');
    }
    
  };

  return (
    <div className="contenedor-calculadora">
      <Pantalla input = { input }/>
      {
        teclado.map((linea, indice) => {
          return (<div className='fila'>
              {
                linea.map((tecla,indice) => {
                  return (<Boton manejarClick = { (tecla==='=') ? calcularResultado : agregarInput}>{tecla}</Boton>)
                })
              }
            </div>)
        })
      }
      <div className='fila'>
          <BotonClear manejarClick={ () => setInput('') }>Clear</BotonClear>
      </div>
    </div>
  );
}

export default Calculadora;