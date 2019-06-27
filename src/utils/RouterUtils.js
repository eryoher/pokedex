import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { LOGIN } from './RoutePath'

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

export const PrivateRouteWithSubRoutes = ({ component: Component, routes, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        /*auth.authUser*/ true ? ( // TODO fix when login is ready
          <Component {...props} routes={routes} />
        ) : (
          <Redirect
            to={{
              pathname: LOGIN,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}