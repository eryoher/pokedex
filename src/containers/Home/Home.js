// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import { Grid } from 'react-bootstrap';

import logo from './../../logo.svg';

type Props = {
  className?: string,
  disabled?: boolean,
  theme: Object
};

class Home extends Component<Props> {
  render() {
    const { theme } = this.props;
    console.log(theme.App);
    return (
      <div className={theme.App}>
        <header className={theme.AppHeader}>
          <img src={logo} className={theme.AppLogo} alt="logo" />
          <h1>Carena Gestión</h1> 
          <small>Homepage</small>  
          <Link to="/voucher">
            <Button>Submit</Button>
          </Link>
        </header>        
      </div>
    );
  }
}

export default Home;
