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
    <div className="product-item">
      <div className="staff">

        <div className="item-img">
          <img src={product.imagenUrl} alt="img" />

          <div className="item-info">
            <h5>{product.title}</h5>
            <p className="precio">
              Precio: <span> S/{product.precio}</span>
            </p>
          </div>
          <div className="item-actions">
            <button onClick={handleAdd} className="btn btn-order">
              Pedir
            </button>
            <Link to={`/products/${product.id}`} className="btn btn-more-details">
              Ver más detalles
            </Link>
          </div>
        </div>

      </div></div>
  );
};
