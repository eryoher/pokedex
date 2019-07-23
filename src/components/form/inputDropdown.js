import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputDropdown.module.css';

class InputDropdown extends Component {

    renderOptions = () => {
        const { options, placeholder } = this.props;
        const result = [];
        result.push(
            //Falta logica para placeholder por defecto
            <option value={1} key={options.length}  >{placeholder}</option>
        );

        options.forEach(option => {
            result.push(
                <option value={option.id} key={option.id}>{option.label}</option>
            )
        });

        return result;

    }

    render() {
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, options, disable, theme, inputFormCol } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";

        return (
            <Col {...inputFormCol} >
                <Row className={"form-group"}>
                    <label className={`${classLabel} ${theme.inputLabel}`} style={{ ...styleLabel, paddingTop: '4px' }} >
                        {label}
                    </label>
                    <Col className={classInput} style={{ ...divStyle }}>
                        <select
                            id={inputId}
                            name={name}
                            style={{ styles }}
                            placeholder={placeholder}
                            disabled={disable}
                            className={`${theme.inputDropdown} custom-select`}
                            onChange={(value) => this.props.onChange(value)}
                        >
                            {options && this.renderOptions()}
                        </select>
                    </Col>

                </Row>
            </Col>
        )
    }
}
export default themr('InputDropdownStyle', styles)(InputDropdown);
