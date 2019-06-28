import React, { Component } from 'react'
import { Form, Row, Col, textarea, Label } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputTextArea.module.css';


class InputTextArea extends Component {

    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, cols, rows, disable, theme} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";

        return (
            <Row className={"form-group"}>                
                <Label className={`${theme.label}  ${classLabel}`} style={{...styleLabel}} >
                    {label}
                </Label>
                <Col className={classInput} style={{...divStyle}}>
                    <textarea        
                        id={inputId}              
                        name={name}                          
                        style={{margin:'5px ,0px', ...styles}}
                        placeholder={placeholder}                            
                        rows={rows}
                        cols={cols}
                        disabled={disable}
                        className={theme.inputTextArea}
                    />
                </Col>
                
            </Row>
        )
    }
}

export default themr('InputTextAreaStyle', styles)( InputTextArea );
