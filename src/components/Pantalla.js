import React from "react";
import '../stylesheets/Pantalla.css'

const Pantalla = ({ input = 0 }) => (
  <div className='input'>
    { input }
  </div>
);

export default Pantalla;