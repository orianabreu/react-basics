import React from "react";
import "./Contact.scss";
//import harry from "../../assets/images/1.png";

//<img src={harry} alt='harry' />
//<h2 style={{color: "blue", fontSize: "50px"}}>Contacto</h2> estilos en línea

export default function Contact({ id, name, img, telf, email }) {
  return (
    <div className="card">
        <div className="top">
            <h2 className="name">{id}: {name}</h2>
            <img src={img} alt="" className="circle-img"/>
        </div>

        <div className="bottom">
            <p className="info">{telf}</p>
            <p className="info">{email}</p>
        </div>
    </div>
  );
}
