import React, { useState } from 'react';
import "./formulario.css";

const Formulario = () => {
  const [fecha1,setFecha1]=useState("");
  const [fecha2,setFecha2]=useState("");
  
  var fechaInicio = new Date(fecha1).getTime();
  var fechaFin    = new Date(fecha2).getTime();

  var diff = fechaFin - fechaInicio;
  var totalDiff=diff/(1000*60*60*24);
  return (
    <>
    <form className='formulario'>
      <h2>formulario</h2>
      <div className="salario">
          <label htmlFor="sueldo">ingrese los ultimos tres pagos recividos</label>
          <input type="text" placeholder='sueldo1' className='sueldo'/>
          <input type="text" placeholder='sueldo2' className='sueldo'/>
          <input type="text" placeholder='sueldo3' className='sueldo'/>
          <h3></h3>
      </div>
      <div className="fecha">
        <label htmlFor="fecha1">fecha de ingreso</label>
        <input type="date" id="fecha1" name="fecha" value={fecha1} onChange={(e1)=>setFecha1(e1.target.value)}/>
        <label htmlFor="fecha2">fecha de retiro</label>
        <input type="date" id="fecha2" name="fecha" value={fecha2} onChange={(e2)=>setFecha2(e2.target.value)}/>
        <h3>{totalDiff}</h3>
      </div>
    </form>
    </>
  )
}

export default Formulario