import { types } from "../types/types";

const initialState = JSON.parse(localStorage.getItem("shoppingCart")) || [];
export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addProduct:
      const exists = state.filter(
        (product) => product.id === action.payload.id
      );
      // console.log(exists);
      let newState = [];
      if (exists.length !== 0) {
        newState = state.map((product) => {
          if (product.id === action.payload.id) {
            product.cantidad++;
            return product;
          } else {
            return product;
          }
        });
      }
      // console.log(newState);
      return exists.length === 0
        ? [...state, { ...action.payload, cantidad: 1 }]
        : [...newState];
    // return [...state, { ...action.payload, cantidad: 1 }];
    case types.deleteProduct:
      return state.filter((product) => product.id !== action.payload);
    case types.deleteAll:
      return [];
    case types.increaseItem:
      return state.map((product) => {
        if (product.id === action.payload) {
          product.cantidad++;
          return product;
        } else {
          return product;
        }
      });
    case types.decreaseItem:
      return state.map((product) => {
        if (product.id === action.payload) {
          product.cantidad--;
          return product;
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};
