import React, { Component } from 'react';
import { Provider } from "react-redux";
import AppRouter from './AppRouter';
import configureStore from './store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>        
        <AppRouter/>        
      </Provider>
    );
  }
}
  
export default App;