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
          Mikuy es una palabra que representa la experiencia de sentarse a comer
          con los seres queridos. La emoción que representa compartir una comida
          con personas especiales fue el motivo principal para crear esta
          pequeña empresa.
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
          <p>926513695</p>
        </div>
        <div className="footer__contactos-item" style={{ textAlign: "left" }}>
          <GpsFixedIcon style={{ color: "white", fontSize: 20 }} />
          <p>Avenida Nuevo Horizonte Carapongo - Los Álamos</p>
        </div>
        <div className="footer__contactos-item">
          <QueryBuilderIcon style={{ color: "white", fontSize: 20 }} />
          <p>Abierto Lunes-Viernes</p>
        </div>
      </div>
    </div>
  );
};
