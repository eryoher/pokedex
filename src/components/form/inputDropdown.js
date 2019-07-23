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

    getconfigField = (id) => {
        const { fields } = this.props;
        let result = {};

        fields.forEach(field => {
            if (field.idcampo == id) {
                result = field;
            }
        });

        return result;
    }

    renderField = () => {
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, options, disable, theme, inputFormCol, fields } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";

        const config = this.getconfigField(inputId);

        if (config.visible) {
            return (
                <Col {...inputFormCol} >
                    <Row className={"form-group"}>
                        <label className={`${classLabel} ${theme.inputLabel}`} style={{ ...styleLabel, paddingTop: '4px' }} >
                            {(config.label) ? config.label : label}
                        </label>
                        <Col className={classInput} style={{ ...divStyle }}>
                            <select
                                id={inputId}
                                name={name}
                                style={{ styles }}
                                placeholder={placeholder}
                                disabled={!config.editable}
                                className={`${theme.inputDropdown} custom-select`}
                                onChange={(value) => this.props.onChange(value)}
                            >
                                {options && this.renderOptions()}
                            </select>
                        </Col>

                    </Row>
                </Col>
            )
        } else {
            return null;
        }
    }

    render() {
        const { fields } = this.props;
        if (fields) {
            return (
                this.renderField()
            )
        } else {
            return null
        }
    }
}
export default themr('InputDropdownStyle', styles)(InputDropdown);
