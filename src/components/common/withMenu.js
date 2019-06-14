import React, { Component } from 'react'
import {  Row, Col } from 'react-bootstrap';

function withMenu(WrappedComponent){
    class WithMenu extends Component {
        render() {
            return (
                <div className="container" >                    
                    <Row className="show-grid">
                        <Col md={1}>
                            <code> Menu </code>
                        </Col>                        
                        <Col md={11}>
                            <WrappedComponent 
                                { ...this.props }
                            />
                        </Col>
                    </Row>
                    
                </div>
            )
        }
    }

    return WithMenu;
}

export default withMenu;