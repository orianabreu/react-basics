//import React from "react";
import "./App.scss";
import Saludo from "./components/Saludo/Saludo";

export default function App() {
  const alumno1nombre = "Rafael"
  const alumno1apellido = "García"

  return (
    // <>
    // <React.Fragment>
    <div className='App'>
      <h1>Hola Mundo</h1>
      <p>como estas?</p>
      <Saludo nombre={alumno1nombre} apellido={alumno1apellido}/>
      <Saludo nombre="Carlos" apellido="Martín"/>
      <Saludo nombre="Andrea" apellido="Santa María"/>
    </div>
    // </React.Fragment>
    // </>
  );
}

//export default App;
