import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export const UserItem = ({ order }) => {
  return (
    <div className="col-md-6 col-sm-12 card">
      <div className="card-body">
        <p className="card-text">N° orden: {order.id}</p>
        <p className="card-text">
          {moment(order.tiempo).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <button
          className={
            order.estado === "Por Confirmar"
              ? "btn btn-danger "
              : order.estado === "Enviado"
              ? "btn btn-warning"
              : "btn btn-primary"
          }
        >
          {order.estado}
        </button>
        <Link className="btn btn-primary ml-2" to={`user/${order.id}`}>
          Más Detalles
        </Link>
      </div>
    </div>
  );
};
