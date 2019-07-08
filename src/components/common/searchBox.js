import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputText from 'components/form/inputText';

export default class SearchBox extends Component {
    render() {
        return (
            <>
                <Col sm={6} className={"pl-4"}>
                    <InputText
                        placeholder={'Ingrese un Producto'}
                    />
                </Col>
                <Col sm={3}>
                    <InputText
                        placeholder={'Ingrese un Código'}
                    />
                </Col>
                <Col sm={1}>
                    <input type="checkbox" className={"form-check-input"} value="1" /> <label className={"form-check-label pt-1"}>Con Stock</label> 
                </Col>
                <Col sm={1} className={"text-left"}>
                    <FontAwesomeIcon icon={faSearch} />
                </Col>
            </>
        )
    }
}
