import React from 'react';
import { Route } from "react-router-dom";

export const RouteWithSubRoutes = ({ component: Component, routes, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} routes={routes} />
      )}
    />
  );
}
