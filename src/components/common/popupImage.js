import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera  } from '@fortawesome/free-solid-svg-icons';
import { Image, Modal } from 'react-bootstrap';


export default class PopupImage extends Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    }

    handleClose = () => {
        this.setState({showModal:false});
    }

    handleOpen = () => {
        this.setState({showModal:true});

    }

    render() {
        return (
            <div style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faCamera} onClick={this.handleOpen} />
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton />                        
                    <Modal.Body>
                        <Image className={"text-center"} src="assets/images/logo.svg" />
                    </Modal.Body>                    
                </Modal>
            </div>
        )
    }
}
