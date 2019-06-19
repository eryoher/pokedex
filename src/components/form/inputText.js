import React, { Component } from 'react'
import { Form, Row, Col, input, Label } from 'react-bootstrap';


export default class InputText extends Component {
    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";

        return (
            <Row className={"form-group"}>                
                <Label className={classLabel} style={{...styleLabel, paddingTop:'3px'}} >
                    {label}
                </Label>
                <Col className={classInput} style={{...divStyle}}>
                    <input        
                        id={inputId}              
                        name={name}  
                        type="text"
                        style={{margin:'5px ,0px', width:'70%', height:'35px', ...styles}}
                        placeholder={placeholder} 
                        disabled={disable}                           
                    />
                </Col>
                
            </Row>
        )
    }
}
