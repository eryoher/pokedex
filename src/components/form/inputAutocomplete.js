import React, { Component, Fragment } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Row, Col } from 'react-bootstrap';

import styles from "./inputAutocomplete.module.css";
import { themr } from "react-css-themr";

class InputAutocomplete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,

        };
    }

    _cache = {};

    _handleInputChange = (query) => {
        this.setState({ query });
    }

    _handlePagination = (e, shownResults) => {
        const { query } = this.state;
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

        this.setState({ isLoading: true });

        const page = cachedQuery.page + 1;

    }

    _handleSearch = (query) => {
        if (this._cache[query]) {
            this.setState({ options: this._cache[query].options });
            return;
        }

        this.props.handleSearch(query);
    }

    render() {
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, theme, auoptions, handleLoading, handleSelect, labelKey, disable, inputFormCol } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        return (
            <Col {...inputFormCol} >
                <Row className={"form-group"}>
                    <label className={`${theme.inputLabel}  ${classLabel}`} style={{ ...styleLabel }} >
                        {label}
                    </label>
                    <Col className={classInput} style={{ ...divStyle }}>
                        <Fragment>
                            <AsyncTypeahead
                                disabled={disable}
                                isLoading={handleLoading}
                                id={inputId}
                                options={auoptions}
                                name={name}
                                labelKey={labelKey}
                                filterBy={(option, props) => {
                                    return true;
                                }}
                                minLength={3}
                                onSearch={this._handleSearch}
                                onChange={handleSelect}
                                className={`${theme.inputText}`}
                                placeholder={placeholder}
                                renderMenuItemChildren={(option) => {
                                    return (<option key={option.id} >{option.label}</option>);
                                }}

                            />
                        </Fragment>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default themr("InputAutocompleteStyles", styles)(InputAutocomplete);
