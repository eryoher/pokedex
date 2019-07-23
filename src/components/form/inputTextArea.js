import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputTextArea.module.css';


class InputTextArea extends Component {

    render() {
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, cols, rows, disable, theme, onChange, value, inputFormCol } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";

        return (
            <Col {...inputFormCol} >
                <Row className={"form-group"}>
                    <label className={`${theme.label}  ${classLabel}`} style={{ ...styleLabel }} >
                        {label}
                    </label>
                    <Col className={classInput} style={{ ...divStyle }}>
                        <textarea
                            id={inputId}
                            name={name}
                            style={{ margin: '5px ,0px', ...styles }}
                            placeholder={placeholder}
                            rows={rows}
                            cols={cols}
                            disabled={disable}
                            className={theme.inputTextArea}
                            onChange={(v) => onChange(v)}
                            value={value}
                        />
                    </Col>

                </Row>
            </Col>
        )
    }
}

export default themr('InputTextAreaStyle', styles)(InputTextArea);
