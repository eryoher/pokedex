import React, { Component } from 'react'
import {  Row, Col } from 'react-bootstrap';
import Menu from './menu'

function withMenu(WrappedComponent){
    class WithMenu extends Component {
        render() {
            return (
                <div >                    
                    <Row className="show-grid" style={{marginRight:'0px'}} >
                        <Col md={1} style={{ paddingRight:'0px',  color:'white', backgroundColor:'#2F80ED', fontSize:'20px'}}>                            
                            <Menu />                    
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