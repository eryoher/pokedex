import React, { Component } from 'react'
import {  Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSearch, faPlus, faClock, faBell, faCog, faUserCircle  } from '@fortawesome/free-solid-svg-icons'

function withMenu(WrappedComponent){
    class WithMenu extends Component {
        render() {
            return (
                <div className="" >                    
                    <Row className="show-grid" style={{marginRight:'0px'}} >
                        <Col md={1} style={{ paddingRight:'0px',  color:'white', backgroundColor:'#2F80ED', fontSize:'20px'}}>                            
                            <div className="d-flex align-items-start flex-column bd-highlight mb-3" style={{height: '40%'}}>
                                <div className="p-2 bd-highlight" style={{margin:"0px auto"}} >
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <div className="p-2 bd-highlight" style={{margin:"0px auto"}}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </div>
                                <div className="mb-auto p-2 bd-highlight" style={{margin:"0px auto"}}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <div className="p-2 bd-highlight" style={{margin:"0px auto"}}>
                                    <FontAwesomeIcon icon={faBell} />
                                </div>
                                <div className="p-2 bd-highlight" style={{margin:"0px auto"}}>
                                    <FontAwesomeIcon icon={faCog} />
                                </div>
                                <div className="p-2 bd-highlight" style={{margin:"0px auto"}}>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </div>
                            </div>                              
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