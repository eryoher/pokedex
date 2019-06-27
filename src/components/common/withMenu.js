import React, { Component } from 'react'
import {  Row, Col } from 'react-bootstrap';
import Menu from './menu'
import { themr } from 'react-css-themr';
import styles from './withMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify  } from '@fortawesome/free-solid-svg-icons'

function withMenu(WrappedComponent){
    class WithMenu extends Component {
        
        constructor(props){
            super(props);
            this.state = {
                showMenu : true
            }
        }

        handleToggle = () => {
            this.setState({ showMenu : !this.state.showMenu });
        }
        
        render() {
            const { theme } = this.props;
            const { showMenu } = this.state;
            const toggle = (showMenu) ? theme.toggled : '';

            return (
                <div >                                        
                    <div className="d-flex" id="wrapper">
                        <div className={`${theme.sidebarWrapper} ${toggle}`} >                                
                            <div className={` ${theme.listGroup} list-group-flush`}>
                                {<Menu />}                                
                            </div>
                        </div>
                        
                        <div className={theme.pageContentWrapper} >
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <Row className="show-grid" style={{marginRight:'0px'}} >
                                    <Col md={12}>
                                        <button className={`btn btn-primary ${theme.buttonMenu} `} onClick={ () =>  this.handleToggle()  } >
                                            <FontAwesomeIcon icon={faAlignJustify} />
                                        </button>       
                                    </Col>
                                    <Col md={12}>
                                        <WrappedComponent 
                                            { ...this.props }
                                        />
                                    </Col>
                                </Row>
                            </nav>     
                        </div>                          

                    </div>
                </div>
            )
        }
    }   
    return  themr('WithMenuTheme', styles)(WithMenu);
}

export default withMenu;