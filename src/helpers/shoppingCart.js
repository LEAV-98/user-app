export const calculartotal = (shoppingCart) => {
  let cantidadTotal = 0;
  shoppingCart.forEach((product) => {
    cantidadTotal = cantidadTotal + product.cantidad;
  });
  return cantidadTotal;
};
export const calcularPrecio = (shoppingCart) => {
  let cantidadTotal = 0;
  shoppingCart.forEach((product) => {
    cantidadTotal = cantidadTotal + product.cantidad * product.precio;
  });
  return cantidadTotal;
};
