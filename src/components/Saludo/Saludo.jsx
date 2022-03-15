import React from 'react';

export default function Saludo(props) {
    console.log(props);
    const randomNumber = Math.ceil(Math.random() * 10);

  return (
    <>
        <h2>Hola {props.nombre} {props.apellido}</h2>
        <p>Mi número de la suerte es el {randomNumber}</p>
    </>
  )
}

//export default Saludo;
