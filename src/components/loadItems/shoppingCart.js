import React, { Component } from 'react';
import { Row, Col, Button, Modal, ModalDialog } from 'react-bootstrap';


export default class ShoppingCart extends Component {
    
    constructor(props, context) {
        super(props, context);    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        console.log('aca')
        this.setState({ show: true });
    }

    render() {
        const { showModal } = this.props;
        console.log('estado', showModal)
        return (
            <>                
                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
