import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { validate } from "email-validator";
import { useDispatch } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../actions/auth";
export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [inputValues, handleInputChange] = useForm({
    name: "leav",
    email: "leav@leav.com",
    password: "leav123",
  });
  const { name, email, password } = inputValues;
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("Registranding");
    if (name === "" || email === "" || password === "") {
      Swal.fire({
        title: "Rellena los datos no seas imbecil",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (!validate(email)) {
      Swal.fire({
        title: "Escribe un email valido pndejo",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    dispatch(startRegisterWithEmailPasswordName(email, password, name));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-10   mx-auto mt-3">
          <Link to="/">Volver</Link>
          <h1 className="text-center">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Nombres"
                name="name"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Correo"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button className="btn btn-success ">Registrar</button>
            </div>
            <p>
              Ya tienes una cuenta?
              <Link to="/auth/login"> Inicia Sesión aquí</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
