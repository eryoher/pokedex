import React, { Component } from 'react'
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
            options: [],
            query: '',
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

        this.setState({isLoading: true});

        this.props.handleSearch(query);        
    }

    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, theme, maxResults} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        return (
            

          <Row className={"form-group"}>                
                <label className={`${theme.inputLabel}  ${classLabel}`} style={{...styleLabel}} >
                    {label}
                </label>
                <Col className={classInput} style={{...divStyle}}>
                    <AsyncTypeahead
                        {...this.state}
                        id={inputId}
                        name={name}
                        labelKey="login"
                        maxResults={maxResults}
                        minLength={2}
                        onInputChange={this._handleInputChange}
                        onPaginate={this._handlePagination}
                        onSearch={this._handleSearch}
                        className={`${theme.inputText}`}
                        paginate
                        placeholder={placeholder}
                        renderMenuItemChildren={(option, props) => (
                            console.log(option, props)
                        )}
                        useCache={false}
                    />
                </Col>
                
            </Row>
        )
    }
}

export default themr("InputAutocompleteStyles", styles)(InputAutocomplete);
