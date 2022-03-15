//import React from "react";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import contacts from "./data/contacts";
// import Button from "./components/Button/Button";
// import Saludo from "./components/Saludo/Saludo";

export default function App() {
  // const alumno1nombre = "Rafael"
  // const alumno1apellido = "García"

  return (
    // <>
    // <React.Fragment>
    <div className='App'>
      {/* <h1>Hola Mundo</h1>
      <p>como estas?</p>
      <Button>click</Button>
      <Saludo nombre={alumno1nombre} apellido={alumno1apellido}/>
      <Saludo nombre="Carlos" apellido="Martín"/>
      <Saludo nombre="Andrea" apellido="Santa María"/> */}
      <h1>Contacts:</h1>

      {contacts.map((contact, index) => {
        console.log(contact, index);
        return (
          <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          img={contact.image}
          telf={contact.phone}
          email={contact.email}
          />
        )
      })}
    </div>
    // </React.Fragment>
    // </>
  );
}

//export default App;
