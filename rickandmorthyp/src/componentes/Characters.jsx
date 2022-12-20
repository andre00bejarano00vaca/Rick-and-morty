import React, {useEffect, useState} from 'react';
import "./Characters.css";

export const Characters = () => {
const [Characters,setCharacters]=useState([])
useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(respuesta=>respuesta.json())
    .then(data=>setCharacters(data.results))
},[])
  return (
    <>
    {Characters.map(Characters=>((
    <article>
        <div className='imagenConteiner'>
            <img src={Characters.image} alt={Characters.name} />
        </div>
        <h2>{Characters.name}</h2>
        <p>{Characters.status}</p>
    </article> 
    
    )))}
</>
  )
}
