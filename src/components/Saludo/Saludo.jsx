import React from 'react';
import Button from '../Button/Button';

export default function Saludo(props) {
    console.log(props);
    const randomNumber = Math.ceil(Math.random() * 10);

    const handleClick = () => {
        console.log("he hecho click...");
    }

  return (
    <>
        <h2>Hola {props.nombre} {props.apellido}</h2>
        <p>Mi número de la suerte es el {randomNumber}</p>
        <Button onClick={handleClick}>click aquí</Button>
        <Button onClick={() => console.log("hola...")}>hola</Button>
    </>
  )
}

//export default Saludo;
