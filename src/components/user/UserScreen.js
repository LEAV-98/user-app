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
      .orderBy("tiempo", "asc")
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
      <main className="mt-2">
        <div className="container">
          <h2 className="text-center">Bienvenido {auth.name}</h2>
          <h3>Tus Ordenes</h3>
          {orders.length === 0 ? (
            "No hay ordenes en tu cuenta"
          ) : (
            <UserList orders={orders} />
          )}
        </div>
      </main>
    </>
  );
};
