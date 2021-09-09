import React from "react";
import { Link } from "react-router-dom";
import { yellow } from "@material-ui/core/colors";
import PhoneIcon from "@material-ui/icons/Phone";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__nosotros">
        <h3>Nosotros</h3>
        <p>
          Nuestra pizza es única e inigualable. Creamos y creemos en una pizza
          saludable y que invita a compartir buenos y divertidos momentos con
          las personas que nos rodean. El secreto de una pizza saludable está en
          su masa...
        </p>
      </div>
      <div className="footer__servicios">
        <h3>Enlaces</h3>
        <div className="footer__servicios-links">
          <Link className="footer__servicios-link" to="/">
            Inicio
          </Link>
          <Link className="footer__servicios-link" to="/products">
            Menu
          </Link>
          <Link className="footer__servicios-link" to="/shopping">
            Carrito
          </Link>
        </div>
      </div>
      <div className="footer__contactos">
        <h3>Contactos</h3>
        <div className="footer__contactos-item">
          <PhoneIcon style={{ color: "white", fontSize: 20 }} />
          <p>015780023</p>
        </div>
        <div className="footer__contactos-item">
          <GpsFixedIcon style={{ color: "white", fontSize: 20 }} />
          <p>Avenida Alfredo Benavides 871</p>
        </div>
        <div className="footer__contactos-item">
          <QueryBuilderIcon style={{ color: "white", fontSize: 20 }} />
          <p>Abierto Lunes-Viernes</p>
        </div>
      </div>
    </div>
  );
};
