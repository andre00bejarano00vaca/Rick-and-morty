import React, { useState } from 'react'
import { Buttons } from './Buttons'

export const Header = () => {
    const fullstack=['html','js','react','node']
    const [pos1,pos2,,pos4]=fullstack;
    const nombre= 'andre';
    const [darkMode,setDarkMode]=useState(false)
    const ManejadorClick=()=>{
        console.log('darckmode',darkMode);
        setDarkMode(!darkMode);
    }
  return (
    <>
        <ul>
            <li>ideas</li>
            <li>herramientas</li>
            <li>{nombre}</li>
            <li>{pos1}</li>
            <li>{pos2}</li>
            <li>{pos4}</li>
            <li>{pos1}</li>
        </ul>
        {/* <button type='button' onClick={ManejadorClick}>{darkMode}</button> */}
        <button type='button' onClick={()=>setDarkMode(!darkMode)}>{darkMode ? 'ligth mode':'Dark Mode'}</button>
        <Buttons></Buttons>
    </>
  )
}
