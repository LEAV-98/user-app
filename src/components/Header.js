import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import PhoneIcon from "@material-ui/icons/Phone";

export const Header = () => {
  const { auth } = useSelector((state) => state);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { shoppingCart } = useSelector((state) => state);
  //   console.log(auth);
  useEffect(() => {
    if (auth.uid) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [auth, setIsLoggedIn, dispatch]);
  const handleLogout = () => {
    console.log("logout");
    dispatch(startLogout());
  };
  return (
    <header className="header">
      <>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light">
          <Link className="navbar-brand " to="/">
            <img
              src="https://res.cloudinary.com/dbnds4vtj/image/upload/v1631155067/pizza-mickuy-logo_urahso.png"
              className="img-banner"
              alt="banner"
            />
          </Link>
          <div className="nav-item">
            <div
              className="nav-link d-flex align-items-center"
              style={{ color: "#fac564" }}
            >
              <PhoneIcon className="ml-0" />
              <p className="my-0 ml-2">926513695</p>
            </div>
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MenuIcon style={{ color: "white", fontSize: 25 }} />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <Link className="nav-link " to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/products">
                  Menú
                </Link>
              </li>
              {!isLoggedIn ? (
                <>
                  <li className="nav-item ">
                    <Link className="nav-link" to="/auth/login">
                      Iniciar Sesión
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link className="nav-link  " to="/auth/register">
                      Registrarse
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link text-capitalize" to="/user">
                      {auth.name}
                    </Link>
                  </li>
                  <li className="nav-item" onClick={handleLogout}>
                    <p className="nav-link my-0" style={{ cursor: "pointer" }}>
                      Cerrar Sesión
                    </p>
                  </li>
                </>
              )}
              {/* <li className="nav-item ">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li> */}
              <li className="nav-item ">
                <Link
                  className="nav-link d-flex align-items-center "
                  to="/shopping"
                >
                  <ShoppingCartIcon />
                  <p className="my-0">{shoppingCart.length}</p>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </header>
  );
};
