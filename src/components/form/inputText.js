import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';

class InputText extends Component {
    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable, theme} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = ( disable ) ? theme.inputDisabled : '';
        console.log(theme.inputText)
        return (
            <Row className={"form-group"}>                
                <Label className={`${theme.inputLabel}  ${classLabel}`} style={{...styleLabel}} >
                    {label}
                </Label>
                <Col className={classInput} style={{...divStyle}}>
                    <input        
                        id={inputId}              
                        name={name}  
                        type="text"
                        style={styles}
                        placeholder={placeholder} 
                        disabled={disable}   
                        className={`${theme.inputText} ${classText}`}                                         
                    />
                </Col>
                
            </Row>
        )
    }
}

export default themr('InputTextStyle', styles)( InputText );