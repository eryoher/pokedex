import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'react-css-themr';
import contextTheme from './themes';
import Home from './containers/Home';
import Order from './containers/Order';
import Voucher from './containers/Voucher';
import HeaderBoard from './containers/Headboard';
import Generate from './containers/Generate';

import configureStore from './store';
import { translate, setLocale } from 'translations/index';

type Props = {
  className?: string,
  disabled?: boolean
};

const store = configureStore();

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={contextTheme}>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/order" component={Order} />
              <Route path="/voucher" component={Voucher} />
              <Route path="/headerboard" component={HeaderBoard} />
              <Route path="/generate" component={Generate} />
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
  
export default App;
