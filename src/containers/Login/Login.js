// @flow
import React, { Component } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import LoginForm from 'components/login/loginForm';
import {Card} from 'reactstrap';

type Props = {
  theme: Object
};

export default class Login extends Component<Props> {
  render() {
    const { theme } = this.props;
    console.log(theme);
    return (
        <Row >
          <div className={"container"} >
            <Col sm={12} className={`mt-5 ${theme.containerLogin}`}>
              <Card className={'pt-4 pb-2'}>
                <Col>
                    <Image className={theme.imgLogo} src={'../../../public/assets/images/logo.svg'} />
                </Col>
                <LoginForm />
              </Card> 
            </Col>
          </div>
        </Row>
    )
  }
}
