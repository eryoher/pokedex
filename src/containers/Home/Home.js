// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { VOUCHER } from '../../utils/RoutePath';
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
          <Link to={VOUCHER}>
            <Button>Submit</Button>
          </Link>
        </header>        
      </div>
    );
  }
}

export default Home;
