import { types } from "../types/types";
import Swal from "sweetalert2";
export const initAddProduct = (product) => {
  return (dispacth) => {
    dispacth(addProduct(product));
    Swal.fire({
      title: "añadido a tu carrito :D",
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
  };
};
export const addProduct = (product) => {
  return {
    type: types.addProduct,
    payload: product,
  };
};
export const initDeleteAll = () => {
  return (dispatch) => {
    Swal.fire({
      title: "Estas Seguro de eliminar todo tu carrito?",
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eiminado", "", "success");
        dispatch(deleteAll());
      } else if (result.isDenied) {
        Swal.fire("Ta bien", "", "info");
      }
    });
  };
};
export const deleteAll = () => {
  return {
    type: types.deleteAll,
  };
};
export const increaseItem = (id) => {
  return {
    type: types.increaseItem,
    payload: id,
  };
};
export const decreaseItem = (id) => {
  return {
    type: types.decreaseItem,
    payload: id,
  };
};
export const deleteProduct = (id) => {
  return {
    type: types.deleteProduct,
    payload: id,
  };
};
