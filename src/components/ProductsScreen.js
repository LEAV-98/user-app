import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebase-config";
import { Header } from "./Header";
import { Loading } from "./loading/Loading";
import { ProductList } from "./products/ProductList";

export const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [pastas, setPastas] = useState([]);
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const shoppingCart = useSelector((state) => state.shoppingCart);
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      const newProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(newProducts);

      setLoading(true);
    });
    return () => {
      setProducts([]);
    };
  }, []);
  useEffect(() => {
    setPizzas(products.filter((product) => product.tipo === "Pizzas"));
    setPastas(products.filter((product) => product.tipo === "Pastas"));
    setCombos(products.filter((product) => product.tipo === "Combos"));
  }, [products]);
  // console.log(products);
  useEffect(() => {
    // console.log(shoppingCart);
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);
  return (
    <>
      <Header />
      <div className="container">
        {loading ? (
          <>
            <div>
              <h1>Productos</h1>

              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Pizzas
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Pastas
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  Combos
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  <h2>Pizzas</h2>
                  <ProductList products={pizzas} />
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                >
                  <h2>Pastas</h2>
                  <ProductList products={pastas} />
                </div>

                <div
                  className={
                    toggleState === 3 ? "content  active-content" : "content"
                  }
                >
                  <h2>Combos</h2>
                  <ProductList products={combos} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
