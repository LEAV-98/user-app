import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { initAddProduct } from "../../actions/shoppingCart";

export const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(initAddProduct(product));
  };
  return (
    <div className="col-sm-6 col-md-3 mb-4">
      <div className="card">
        <img className="card-img-top" src={product.imagenUrl} alt="img" />

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Precio: S/{product.precio}</p>
        </div>
        <div className="card-footer text-muted btn-group">
          <button className="btn btn-danger" onClick={handleAdd}>
            Pedir
          </button>
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            Ver más detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
