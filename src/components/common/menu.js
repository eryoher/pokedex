import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faSearch, faPlus, faBell, faCog, faUserCircle  } from '@fortawesome/free-solid-svg-icons'
import { themr } from 'react-css-themr';
import styles from './menu.module.css';

class Menu extends Component {
    render() {
        const { theme } = this.props;

        return (
            <div className={theme.menuContainer} >
                <div className={`d-flex align-items-start flex-column bd-highlight mb-3 ${theme.subContainer}`}>
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
            </div>
        )
    }
}

export default themr('MenuTheme', styles)(Menu);