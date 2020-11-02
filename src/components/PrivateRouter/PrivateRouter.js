import React from "react";
import { inject, observer } from "mobx-react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = inject("Store")(observer(({ component: Component, Store, ...rest }) => {
  const location = useLocation();
  const { isAuthenticated } = Store;

  return (
    <Route {...rest}>
      {isAuthenticated ?
        <Component />
      :
        <Redirect to={{ pathname: "/signin", state: { from: location } }} />
      }
    </Route>
  );
}));

export default PrivateRoute;