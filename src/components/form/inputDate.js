import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';
import "react-datepicker/dist/react-datepicker.css";


class InputDate extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    getConfigField = (id) => {
        const { fields } = this.props;
        let result = {};

        fields.forEach(field => {
            if (field.idcampo === id) {
                result = field;
            }
        });

        return result;
    }


    getMask = (config) => {
        const { authUser } = this.props

        if (config.mascara) {
            const maskInput = (authUser.configApp.mascaras[config.mascara]) ? authUser.configApp.mascaras[config.mascara].valor : null;
            return (maskInput) ? maskInput : false;
        }

        return false

    }


    renderField = () => {
        const { label, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable, theme, value, onChange, inputFormCol } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';
        const config = this.getConfigField(inputId);
        const customStyleLabel = (config.requerido) ? { ...styleLabel, color: 'red' } : { ...styleLabel };


        if (config.visible) {
            return (
                <Col {...inputFormCol} >
                    <Row className={"form-group"}>
                        <label className={`${theme.inputLabel}  ${classLabel}`} style={customStyleLabel} >
                            {(config.label) ? config.label : label}
                        </label>
                        <Col className={classInput} style={{ ...divStyle }}>
                            <DatePicker
                                style={styles}
                                id={inputId}
                                name={name}
                                selected={(value) ? value : new Date()}
                                onChange={onChange}
                                className={`${theme.inputText} ${classText}`}
                            />
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

export default themr('InputDateStyle', styles)(InputDate);

