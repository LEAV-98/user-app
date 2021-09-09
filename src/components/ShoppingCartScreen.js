import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseItem,
  deleteProduct,
  increaseItem,
  initDeleteAll,
} from "../actions/shoppingCart";
import { calcularPrecio, calculartotal } from "../helpers/shoppingCart";
import { Header } from "./Header";

export const ShoppingCartScreen = () => {
  const [total, setTotal] = useState(0);
  const [precio, setprecio] = useState(0);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleDecrease = (id) => {
    console.log("c disminuye*");
    dispatch(decreaseItem(id));
  };
  const handleIncrease = (id) => {
    console.log("c aumenta**");
    dispatch(increaseItem(id));
  };
  const handleDeleteProduct = (id) => {
    console.log("c elimina*");
    dispatch(deleteProduct(id));
  };
  const handleDeleteAll = () => {
    dispatch(initDeleteAll());
  };

  useEffect(() => {
    // console.log(shoppingCart);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    setTotal(calculartotal(shoppingCart));
    setprecio(calcularPrecio(shoppingCart));
  }, [shoppingCart]);

  return (
    <>
      <Header />
      <div className="container ">
        {shoppingCart.length === 0 && (
          <div className="contenedor-vacio">
            <h2>Aun no hay productos añadidos a tu carrito de compra</h2>
            <Link className="btn-products" to="/products">
              Ir a la Tienda
            </Link>
          </div>
        )}
        {shoppingCart.length !== 0 && (
          <button className="btn-red btn my-4" onClick={handleDeleteAll}>
            Vaciar Carrito
          </button>
        )}
        <div className="contenedor-compra">
          <div className="compra-items">
            {shoppingCart.map((product, i) => (
              <div className="item-shop" key={i}>
                <div className="item-shop__img">
                  <img className="" src={product.imagenUrl} alt="img" />
                </div>
                <div className="">
                  <h2 className="">{product.title}</h2>
                  <div className="">
                    <p>Cantidad</p>
                    <div className="btn-group-number">
                      <button
                        onClick={() => {
                          handleDecrease(product.id);
                        }}
                        disabled={product.cantidad === 1 && "disabled"}
                      >
                        -
                      </button>
                      <p className="m-0"> {product.cantidad}</p>
                      <button
                        className=""
                        onClick={() => {
                          handleIncrease(product.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p> Precio por unidad: {product.precio}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <button
                    className="btn btn-red"
                    onClick={() => {
                      handleDeleteProduct(product.id);
                    }}
                  >
                    Quitar producto
                  </button>
                </div>
              </div>
            ))}
          </div>
          {shoppingCart.length !== 0 && (
            <div className="compra-info">
              <h2>Resumen de Pedido</h2>
              <p className="my-2">Cantidad de productos: {total}</p>
              <p className="mb-4">Precio Total: S./{precio}</p>
              <Link to="/buy" className="btn btn-effect up">
                Realizar Pedido
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
