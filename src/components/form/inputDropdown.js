import React, { Component } from 'react'
import { Row, Col, Label } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputDropdown.module.css';

class InputDropdown extends Component {

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
        const {label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, options, disable, theme} = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";

        return (
            <Row className={"form-group"}>                
                <Label className={`${classLabel} ${theme.inputLabel}`  } style={{...styleLabel, paddingTop:'4px'}} >
                    {label}
                </Label>
                <Col className={classInput} style={{...divStyle}}>                    
                    <select                         
                        id={inputId}              
                        name={name}                          
                        style={{styles}}
                        placeholder={placeholder} 
                        disabled={disable}
                        className={`${theme.inputDropdown} custom-select`}
                    >                        
                        { options && this.renderOptions() }
                    </select>
                </Col>
                
            </Row>
        )
    }
}
export default themr('InputDropdownStyle', styles)( InputDropdown );
