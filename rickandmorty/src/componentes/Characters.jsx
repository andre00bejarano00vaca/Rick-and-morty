import React, { useEffect, useState } from 'react'

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
        <div>
        <h2>{Characters.name}</h2>
        <p>{Characters.status}</p>
        </div>
        )))}
    </>
  )
}
