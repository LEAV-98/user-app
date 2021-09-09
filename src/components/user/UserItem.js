import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";

export const UserItem = ({ order }) => {
  return (
    <div className="orden-item">
      <p className="">
        <span className="numero-orden">N° orden:</span> {order.id}
      </p>
      <p className="">
        {moment(order.tiempo).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <p>
        Estado{" "}
        <button
          className={
            order.estado === "Por Confirmar"
              ? "btn btn-warning "
              : order.estado === "Enviado"
              ? "btn btn-primary"
              : "btn btn-success"
          }
        >
          {order.estado}
        </button>
      </p>

      <div className="mt-4">
        <Link className="btn btn-info" to={`user/${order.id}`}>
          Más Detalles
        </Link>
      </div>
    </div>
  );
};
