import React, { Component } from 'react'
import { Row, Col, Modal } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';
import { IMaskInput } from 'react-imask';
import { connect } from 'react-redux';


class InputTextMask extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getconfigField = (id) => {
        const { fields } = this.props;
        let result = {};

        fields.forEach(field => {
            if (field.idcampo === id) {
                result = field;
            }
        });

        return result;
    }

    renderField = () => {
        const {
            label,
            placeholder,
            name,
            styles,
            inputId,
            colInput,
            colLabel,
            styleLabel,
            divStyle,
            disable,
            theme,
            value,
            onChange,
            inputFormCol,
            authUser
        } = this.props;

        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';
        const config = this.getconfigField(inputId);
        const customStyleLabel = (config.requerido) ? { ...styleLabel, color: 'red' } : { ...styleLabel };

        const maskInput = (config && authUser) ? authUser.configApp.mascaras[config.mascara].valor : null;

        if (config.visible) {
            return (
                <>
                    <Col {...inputFormCol} >
                        <Row className={"form-group"}>
                            <label className={`${theme.inputLabel}  ${classLabel}`} style={customStyleLabel} >
                                {(config.label) ? config.label : label}
                            </label>
                            <Col className={classInput} style={{ ...divStyle }}>
                                <IMaskInput
                                    mask={maskInput}
                                    className={`${theme.inputText} ${classText}`}
                                    value={value}
                                    onChange={(v) => onChange(v)}
                                    style={styles}
                                    placeholder={placeholder}
                                    unmask={true} // true|false|'typed'
                                    onAccept={
                                        // depending on prop above first argument is
                                        // `value` if `unmask=false`,
                                        // `unmaskedValue` if `unmask=true`,
                                        // `typedValue` if `unmask='typed'`
                                        (value, mask) => console.log(value)
                                    }
                                />
                            </Col>
                        </Row>
                    </Col>
                </>
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



const mapStateToProps = ({ auth }) => {
    const { authUser } = auth;
    return { authUser };
};

export default connect(mapStateToProps)(themr('InputTextMaskStyle', styles)(InputTextMask));