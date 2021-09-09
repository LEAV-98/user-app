import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../../firebase/firebase-config";
import { Header } from "../Header";
import { UserList } from "./UserList";

export const UserScreen = () => {
  const { auth } = useSelector((state) => state);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    db.collection("orders")
      .orderBy("tiempo", "desc")
      .onSnapshot((snapshot) => {
        const newOrders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(newOrders.filter((order) => order.email === auth.email));
      });
    return () => {
      setOrders([]);
    };
  }, [auth.email]);
  console.log(orders);
  return (
    <>
      <Header />
      <div className="container contenedor-usuario">
        <h2 className="text-center text-capitalize">Bienvenido {auth.name}</h2>
        <h3>Tus Ordenes</h3>
        {orders.length === 0 ? (
          <p>No hay ordenes en tu cuenta</p>
        ) : (
          <UserList orders={orders} />
        )}
      </div>
    </>
  );
};
