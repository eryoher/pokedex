import React, { Component } from 'react'
import {  Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSearch, faPlus, faClock, faBell, faCog, faUserCircle  } from '@fortawesome/free-solid-svg-icons'

function withMenu(WrappedComponent){
    class WithMenu extends Component {
        render() {
            return (
                <div className="container" >                    
                    <Row className="show-grid">
                        <Col md={1} style={{color:'white', backgroundColor:'#2F80ED', textAlign:"center", fontSize:'20px'}}>
                            <Col xs={12} className="m-2" >
                                <FontAwesomeIcon icon={faStar} />
                            </Col>     
                            <Col xs={12} className="m-2" >
                                <FontAwesomeIcon icon={faSearch} />
                            </Col>
                            <Col xs={12} className="m-2" >
                                <FontAwesomeIcon icon={faPlus} />
                            </Col>                            
                            <Col xs={12} className="m-2" >
                                <FontAwesomeIcon icon={faClock} />
                            </Col>                            
                            <Col xs={12} className="m-2" >
                                <FontAwesomeIcon icon={faBell} />
                            </Col>                           
                            <Col xs={12} className="m-2" >
                                <FontAwesomeIcon icon={faCog} />
                            </Col>                          
                            <Col xs={12} className="m-2" >
                                <FontAwesomeIcon icon={faUserCircle} />
                            </Col>                               
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