import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from "react-router-dom";
import { PrivateRouteWithSubRoutes, RouteWithSubRoutes } from 'utils/RouterUtils';
import Generate from './containers/Generate';
import HeaderBoard from './containers/Headboard';
import Home from './containers/Home';
import Login from './containers/Login';
import Order from './containers/Order';
import Voucher from './containers/Voucher';
import Landing from './containers/Landing';

import { GENERATE, HEADERBOARD, HOME, LOGIN, ORDER, VOUCHER, LANDING } from './utils/RoutePath';

const publicRoutes = [
  { path: HOME, component: Home, exact: true },
  { path: LOGIN, component: Login },
]

const privateRoutes = [
  { path: ORDER, component: Order },
  { path: VOUCHER, component: Voucher },
  { path: HEADERBOARD, component: HeaderBoard },
  { path: GENERATE, component: Generate },
  { path: LANDING, component: Landing }
]

const AppRouter = props => (
  // <BrowserRouter basename="/calendar"> Use in case app is served from a sub-directory
  <BrowserRouter>
    <Switch>
      {publicRoutes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}
      {privateRoutes.map((route, index) => <PrivateRouteWithSubRoutes key={index} { ...route } { ...props }/>)}
    </Switch>
  </BrowserRouter>
)

const mapStateToProps = ({auth}) => {
    return {
      auth
    }
  }

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter)
