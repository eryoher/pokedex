import React, { Component } from 'react'
import { Form, Row, Col, Label, select } from 'react-bootstrap';


export default class InputDropdown extends Component {

    renderOptions = () => {
        const {options} = this.props;
        const result = [];

        options.forEach(option => {                        
            result.push(
                <option value={option.id} key={option.id}>{option.label}</option>
            )                                             
        });

        return result;

    }

    render() {
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, options, disable} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";

        return (
            <Row className={"form-group"}>                
                <Label className={classLabel} style={{...styleLabel, paddingTop:'4px'}} >
                    {label}
                </Label>
                <Col className={classInput} style={{...divStyle}}>                    
                    <select 
                        className="custom-select"
                        id={inputId}              
                        name={name}                          
                        style={{width:"100%", height:'35px' , ...styles}}
                        placeholder={placeholder} 
                        disabled={disable}
                    
                    >                        
                        { options && this.renderOptions() }
                    </select>
                </Col>
                
            </Row>
        )
    }
}
