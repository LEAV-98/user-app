import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { PrincipalScreen } from "../components/PrincipalScreen";
import { UserScreen } from "../components/user/UserScreen";
import { AuthRoute } from "./AuthRoute";
import { firebase } from "../firebase/firebase-config";
import { login } from "../actions/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ProductsScreen } from "../components/ProductsScreen";
import { ProductItemScreen } from "../components/products/ProductItemScreen";
import { ShoppingCartScreen } from "../components/ShoppingCartScreen";
import { BuyScreen } from "../components/BuyScreen";
import { OrderScreen } from "../components/user/OrderScreen";
import { Loading } from "../components/loading/Loading";
export const AppRoute = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <Loading />;
  }
  return (
    <>
      <Router>
        <div className="bg-principal">
          <Switch>
            <PublicRoute
              path="/auth"
              component={AuthRoute}
              isAuthenticated={isLoggedIn}
            />
            <PrivateRoute
              exact
              isAuthenticated={isLoggedIn}
              path="/user"
              component={UserScreen}
            />
            <PrivateRoute
              exact
              isAuthenticated={isLoggedIn}
              path="/user/:id"
              component={OrderScreen}
            />
            <Route path="/products" exact>
              <ProductsScreen />
            </Route>
            <Route path="/products/:id">
              <ProductItemScreen />
            </Route>
            <Route path="/shopping" exact>
              <ShoppingCartScreen />
            </Route>
            <Route path="/buy" exact>
              <BuyScreen />
            </Route>
            <Route path="/">
              <PrincipalScreen />
            </Route>

            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
