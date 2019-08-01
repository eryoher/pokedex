import React, { Component } from 'react'
import { Row, Col, Alert } from 'react-bootstrap';

export default class NotificationMessage extends Component {
    render() {
        const { showError, handleCloseError, errorTitle, errorMessage, type } = this.props;
        const typeNoti = (type) ? type : 'success';
        return (
            <Alert show={showError} variant={typeNoti} onClose={handleCloseError} dismissible>
                <Alert.Heading>{errorTitle}</Alert.Heading>
                <p>
                    {errorMessage}
                </p>
            </Alert>
        )
    }
}
