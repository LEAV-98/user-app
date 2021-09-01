import React from "react";
import { Provider } from "react-redux";
import { AppRoute } from "./routes/AppRoute";
import { store } from "./store/store";
import "./styles/styles.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};
