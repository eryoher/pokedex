import React, { Component, Fragment } from 'react'
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Row, Col } from 'react-bootstrap';

import styles from "./inputAutocomplete.module.css";
import { themr } from "react-css-themr";

class InputAutocomplete extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,        
            
        };
    }

    _cache = {};

    _handleInputChange = (query) => {        
        this.setState({query});
    }
    
    _handlePagination = (e, shownResults) => {
        const {query} = this.state;
        const cachedQuery = this._cache[query];

        // Don't make another request if:
        // - the cached results exceed the shown results
        // - we've already fetched all possible results
        if (
            cachedQuery.options.length > shownResults ||
            cachedQuery.options.length === cachedQuery.total_count
        ) {
            return;
        }

        this.setState({isLoading: true});

        const page = cachedQuery.page + 1;    
    
    }
    
    _handleSearch = (query) => {        
        if (this._cache[query]) {
          this.setState({options: this._cache[query].options});
          return;
        }        

        this.props.handleSearch(query);     
        

    }

    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, theme, maxResults, auoptions, handleLoading } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        console.log(auoptions)
        return (
            <Row className={"form-group"}>                
                <label className={`${theme.inputLabel}  ${classLabel}`} style={{...styleLabel}} >
                    {label}
                </label>
                <Col className={classInput} style={{...divStyle}}>
                    <Fragment>
                        <AsyncTypeahead
                            isLoading = { handleLoading }
                            id={inputId}
                            options={auoptions}
                            name={name}  
                            labelKey="Clave_impo"  
                            filterBy={['Clave_impo', 'Cod_cliente']}                                                                      
                            minLength={3}
                            //onInputChange={this._handleInputChange}                       
                            onSearch={this._handleSearch}
                            className={`${theme.inputText}`}                            
                            placeholder={placeholder}                        
                            renderMenuItemChildren={(option) => {
                                console.log(option, 'render')
                                return(<label key={option.Cod_cliente} >{option.Cod_cliente}</label>);
                            }}

                        />
                    </Fragment>
                </Col>
                
            </Row>
        )
    }
}

export default themr("InputAutocompleteStyles", styles)(InputAutocomplete);
