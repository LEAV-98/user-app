import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { Header } from "../Header";
import { useDispatch } from "react-redux";
import { initAddProduct } from "../../actions/shoppingCart";

export const ProductItemScreen = () => {
  const dispatch = useDispatch();

  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleAdd = () => {
    dispatch(initAddProduct(product));
  };
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      const newProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduct(...newProducts.filter((product) => product.id === id));
      setLoading(true);
    });
    return () => {
      setProduct([]);
    };
  }, [id]);
  return (
    <div>
      <Header />
      {loading ? (
        <>
          <div className="content-item ">
            <div
              className={
                product.tipo === "Pizzas"
                  ? "bg-pizzas"
                  : product.tipo === "Pastas"
                  ? "bg-pastas"
                  : "bg-combos"
              }
            ></div>
            <div className="item-section animate__animated animate__fadeIn">
              {/* <Link to="/products">
                <ArrowBackIosIcon style={{ color: "#fac564", fontSize: 25 }} />
              </Link> */}
              <h1>
                Disfrute{" "}
                {product.tipo === "Pizzas"
                  ? "Nuestras Pizzas"
                  : product.tipo === "Pastas"
                  ? "Nuestras Pastas"
                  : "Nuestros Combos"}{" "}
                !
              </h1>
              <div className="item">
                <div className="item-img">
                  <img src={product.imagenUrl} alt="img" />
                </div>
                <div className=" item-info">
                  <h2>{product.title}</h2>
                  <p>
                    Descripcion <br /> {product.description}
                  </p>
                  <p>Tipo: {product.tipo}</p>
                  <p>
                    Precio:{" "}
                    <span className="font-weight-bold">S/{product.precio}</span>
                  </p>
                  <button onClick={handleAdd} className="btn btn-order">
                    Pedir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        "Cargando"
      )}
    </div>
  );
};
