// @flow
import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import LoginForm from 'components/login/loginForm';
import {Card} from 'reactstrap';
//import logo from '../../../public/assets/images/login_logo.png';


type Props = {
  theme: Object
};

export default class Login extends Component<Props> {
  render() {
    const { theme } = this.props;
    
    return (
        <Row >
          <div className={"container"} >
            <Col sm={12} className={`mt-5 ${theme.containerLogin}`}>
              <Card className={'pt-4 pb-2'}>
                <Col>
                    <Image className={theme.imgLogo} src="assets/images/logo.svg" />
                </Col>
                <LoginForm />
                <Col className={"pt-5 text-center"} >
                    www.carenasistemas.com.ar
                </Col>
              </Card> 
            </Col>
          </div>
        </Row>
    )
  }
}
