import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import { Header } from "../Header";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
export const ProductItemScreen = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <div className="container mt-3">
            <Link to="/products">
              <ArrowBackIosIcon />
            </Link>
            <div className="row">
              <div className="col-sm-10 col-md-6 d-flex justify-content-center">
                <img className="img-fluid " src={product.imagenUrl} alt="img" />
              </div>
              <div className="col-sm-10 col-md-6 ">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">
                  Descripcion <br /> {product.description}
                </p>
                <p className="card-text">Tipo: {product.tipo}</p>
                <p className="card-text">
                  Precio:{" "}
                  <span className="font-weight-bold">S/{product.precio}</span>
                </p>
                <button className="btn btn-danger">Comprar</button>
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
