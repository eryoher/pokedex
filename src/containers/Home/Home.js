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
    return (
      <div className={theme.App}>
        <header className={theme.AppHeader}>
          <img src={logo} className={theme.AppLogo} alt="logo" />

          <h1>Carena Gestión</h1> 
          <small>Homepage</small>       

          <Grid>
            <Row>
              <Col md={12}>
                <Button>INICIAR PEDIDO</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button>LLAMAR AL MOZO</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button>PREFERENCIAS</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button>COMPARTIR UBICACION</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button>INICIAR SESIÓN</Button>
              </Col>
            </Row>
          </Grid>

          <Link to="/order">
            <Button>Submit</Button>
          </Link>
        </header>        
      </div>
    );
  }
}

export default Home;
