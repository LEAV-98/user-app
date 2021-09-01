import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../Header";
import { firebase } from "../../firebase/firebase-config";
import moment from "moment";

export const OrderScreen = () => {
  let { id } = useParams();
  const [order, setOrder] = useState({});
  console.log(id);
  useEffect(() => {
    firebase
      .firestore()
      .collection("orders")
      .onSnapshot((snapshot) => {
        const newOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(newOrders);

        setOrder(newOrders.find((order) => order.id === id));
      });
    return () => {
      setOrder({});
    };
  }, [id]);
  return (
    <>
      <Header />
      <div className="container mt-2">
        <Link to="/user">Volver</Link>
        <h2>Pedido N° {order.id}</h2>
        <p>
          Pedido realizado el{" "}
          {moment(order.tiempo).format("Do MMMM YYYY, h:mm:ss a")}
        </p>
        <p className="d-inline mr-2">Estado del pedido</p>
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
        <p>Precio total: S./{order.precioTotal}</p>
        <p>Dirección: {order.direccion}</p>
        <p>Referencia: {order.referencia}</p>
        <p>Telefono de Contacto: {order.telefono}</p>
        <p>Tu pedido fue</p>
        <div className="row">
          {order.shoppingCart?.map((product) => (
            <div className="card col-md-4 col-sm-12">
              <img className="card-img-top" alt="img" src={product.imagenUrl} />
              <div className="card-body">
                <Link
                  className="card-title text-dark"
                  to={`/products/${product.id}`}
                >
                  {product.title}
                </Link>
                <p className="card-text">Cantidad: {product.cantidad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
