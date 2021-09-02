import React from "react";
import { Switch, Route } from "react-router-dom";
import { RegisterScreen } from "../components/RegisterScreen";
import { LoginScreen } from "../components/LoginScreen";
import SignInSide from "../components/SignInSide";

export const AuthRoute = () => {
  return (
    <>
      <Switch>
        <Route path="/auth/register" exact>
          <RegisterScreen />
        </Route>
        <Route path="/auth/login" exact>
          <LoginScreen />
        </Route>
        <Route path="/auth/login-2" exact>
          <SignInSide />
        </Route>
        {/* <Route path="*">
          <h1>Not Found</h1>
        </Route> */}
      </Switch>
    </>
  );
};
