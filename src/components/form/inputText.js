import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';

class InputText extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            valueInput: (props.value) ? props.value: ''
        }
    }

    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable, theme, type,value, onChange} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = ( disable ) ? theme.inputDisabled : '';
        const customType = (type) ? type : 'text';       

        return (
            <Row className={"form-group"}>                
                <label className={`${theme.inputLabel}  ${classLabel}`} style={{...styleLabel}} >
                    {label}
                </label>
                <Col className={classInput} style={{...divStyle}}>
                    <input        
                        id={inputId}              
                        name={name}  
                        type={customType}
                        style={styles}
                        placeholder={placeholder} 
                        disabled={disable}   
                        className={`${theme.inputText} ${classText}`}
                        value={value}     
                        onChange = { (v) => onChange(v) }                                    
                    />
                </Col>
                
            </Row>
        )
    }
}

export default themr('InputTextStyle', styles)( InputText );