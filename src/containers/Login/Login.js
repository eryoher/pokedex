// @flow
import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import LoginForm from 'components/login/loginForm';

type Props = {
  theme: Object
};

export default class Login extends Component<Props> {
  render() {
    return (
        <Row>
          <Col sm={12} >
              <LoginForm />

          </Col>
        </Row>
    )
  }
}
