import { deleteAll } from "../actions/shoppingCart";
import { firebase } from "./../firebase/firebase-config";
export const addBuyFirebase = (
  nombre,
  email,
  telefono,
  direccion,
  referencia,
  shoppingCart,
  precio,
  dispatch
) => {
  firebase.firestore().collection("orders").add({
    nombre,
    email,
    telefono,
    direccion,
    referencia,
    shoppingCart,
    tiempo: Date.now(),
    estado: "Por Confirmar",
    precio,
  });
  console.log("guardado en firebase claro k si");
  dispatch(deleteAll());
};
