import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';

class InputText extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            valueInput: (props.value) ? props.value : ''
        }
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
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable, theme, type, value, onChange, inputFormCol } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';
        const customType = (type) ? type : 'text';
        const config = this.getconfigField(inputId);

        if (config.visible) {
            return (
                <Col {...inputFormCol} >
                    <Row className={"form-group"}>
                        <label className={`${theme.inputLabel}  ${classLabel}`} style={{ ...styleLabel }} >
                            {(config.label) ? config.label : label}
                        </label>
                        <Col className={classInput} style={{ ...divStyle }}>
                            <input
                                id={inputId}
                                name={name}
                                type={customType}
                                style={styles}
                                placeholder={placeholder}
                                disabled={!config.editable}
                                className={`${theme.inputText} ${classText}`}
                                value={value}
                                onChange={(v) => onChange(v)}
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

export default themr('InputTextStyle', styles)(InputText);