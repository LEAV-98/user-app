import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { sendEmail } from "../../helpers/sendEmail";
import { addBuyFirebase } from "../../helpers/firebase-actions";
import { validate } from "email-validator";

export const FormBuy = ({ isLoggedIn, auth, shoppingCart, precio }) => {
  const [inputValues, handleInputChange] = useForm({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    referencia: "",
  });
  const { nombre, apellido, email, telefono, direccion, referencia } =
    inputValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    isLoggedIn ? handleSubmitLoggedIn() : handleSubmitWithoutLogin();
  };

  const handleSubmitLoggedIn = () => {
    console.log("con cuenta");
    if (
      auth.name === "" ||
      auth.email === "" ||
      telefono === "" ||
      direccion === "" ||
      referencia === ""
    ) {
      Swal.fire({
        title: "Campos Vacios",
        icon: "error",
        showConfirmButton: false,
        timer: 4000,
        customClass: {
          denyButton: "btn-swal2",
          actions: "btn-swal2",
          title: "title-swal2",
          popup: "container-swal2",
        },
      });
      return;
    }
    sendEmail(auth.name, auth.email, telefono, direccion, referencia);
    addBuyFirebase(
      auth.name,
      auth.email,
      telefono,
      direccion,
      referencia,
      shoppingCart,
      precio
    );
    // dispatch(deleteAll());
  };
  const handleSubmitWithoutLogin = () => {
    console.log("sin cuenta");
    if (
      nombre === "" ||
      email === "" ||
      telefono === "" ||
      direccion === "" ||
      referencia === ""
    ) {
      Swal.fire({
        title: "Campos Vacios",
        icon: "error",
        showConfirmButton: false,
        timer: 4000,
        customClass: {
          denyButton: "btn-swal2",
          actions: "btn-swal2",
          title: "title-swal2",
          popup: "container-swal2",
        },
      });
      return;
    }
    if (!validate(email)) {
      Swal.fire({
        title: "Formato de Email Inválido",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          denyButton: "btn-swal2",
          actions: "btn-swal2",
          title: "title-swal2",
          popup: "container-swal2",
        },
      });
      return;
    }
    sendEmail(nombre, email, telefono, direccion, referencia);
    addBuyFirebase(
      nombre,
      email,
      telefono,
      direccion,
      referencia,
      shoppingCart,
      precio
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form-pedido">
      <h2>
        {isLoggedIn
          ? "Bienvenido, registra tu pedido"
          : "Realizar pedido como visitante"}
      </h2>
      {!isLoggedIn && (
        <p>
          Si ya tiene una cuenta,{" "}
          <Link to="/auth/login" className="btn-login">
            Ingrese aquí
          </Link>
        </p>
      )}
      {isLoggedIn && (
        <div>
          <p className="text-capitalize">Nombre: {auth.name}</p>
          <p>Correo: {auth.email}</p>
        </div>
      )}
      <div className="form-group">
        {!isLoggedIn && (
          <input
            className="form-control"
            type="text"
            placeholder="Nombre"
            onChange={handleInputChange}
            name="nombre"
            value={nombre}
          />
        )}
      </div>
      <div className="form-group">
        {!isLoggedIn && (
          <input
            className="form-control"
            type="text"
            placeholder="Apellido"
            onChange={handleInputChange}
            name="apellido"
            value={apellido}
          />
        )}
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="tel"
          placeholder="Telefono"
          onChange={handleInputChange}
          name="telefono"
          value={telefono}
        />
      </div>
      <div className="form-group">
        {!isLoggedIn && (
          <input
            className="form-control"
            type="text"
            placeholder="Correo Electrónico"
            onChange={handleInputChange}
            name="email"
            value={email}
          />
        )}
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Dirección"
          onChange={handleInputChange}
          name="direccion"
          value={direccion}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Referencia"
          onChange={handleInputChange}
          name="referencia"
          value={referencia}
        />
      </div>
      <div className="form-group">
        <input type="submit" className="btn-form" value="Hacer Pedido" />
      </div>
    </form>
  );
};
