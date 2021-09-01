import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calcularPrecio, calculartotal } from "../helpers/shoppingCart";
import { FormBuy } from "./buy/FormBuy";
import { Header } from "./Header";

export const BuyScreen = () => {
  const { auth } = useSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   console.log(auth);
  useEffect(() => {
    if (auth.uid) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [auth, setIsLoggedIn]);
  const [total, setTotal] = useState(0);
  const [precio, setprecio] = useState(0);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  useEffect(() => {
    // console.log(shoppingCart);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    setTotal(calculartotal(shoppingCart));
    setprecio(calcularPrecio(shoppingCart));
  }, [shoppingCart]);
  return (
    <>
      <Header />
      <div className="container mt-2">
        <Link to="/shopping">Volver al carrito</Link>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <FormBuy
              isLoggedIn={isLoggedIn}
              auth={auth}
              shoppingCart={shoppingCart}
              precio={precio}
            />
          </div>
          {shoppingCart.length !== 0 && (
            <div className="col-md-6 col-sm-12">
              <h2>Resumen de Pedido</h2>
              <p>Cantidad de productos: {total}</p>
              <p>Precio Total: S/ {precio}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
