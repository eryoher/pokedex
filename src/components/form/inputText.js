import React, { Component } from 'react'
import { Row, Col, Modal } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import ModalValidate from 'components/headboard/modalValidate';
import { connect } from 'react-redux';
import { IMaskInput } from 'react-imask';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class InputText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLockModal: false
        }
    }

    handleShowModal = () => {
        this.setState({ showLockModal: true });
    }

    handleCancelModal = () => {
        this.setState({ showLockModal: false });
    }

    handleSubmit = (data) => {
        this.handleCancelModal();
        this.props.handleSubmit(data);
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

    getMask = (config) => {
        const { authUser } = this.props
        const maskInput = (authUser.configApp.mascaras[config.mascara]) ? authUser.configApp.mascaras[config.mascara] : null;
        return (maskInput) ? maskInput : false;
    }

    renderInput = (options, config) => {
        let response;
        if (config.mascara) {
            const mask = this.getMask(config); //Se obtiene las posibles opciones de mascara.. aca se agregan validaciones.
            if (mask.tipo === 'fecha') {
                const formatDate = (mask.valor) ? mask.valor : 'MM-dd-yyyy';
                response = (
                    <DatePicker
                        {...options}
                        selected={(options.value) ? new Date(options.value) : new Date()}
                        dateFormat={formatDate}
                    />
                )
            } else if (mask.tipo === 'personalizado') {
                const maskInput = (mask.valor) ? mask.valor : null;

                response = (
                    <IMaskInput
                        {...options}
                        mask={maskInput}
                    />
                )
            } else {
                response = (<input
                    {...options}
                />)
            }

        } else {
            response = (<input
                {...options}
            />)
        }

        return response;
    }

    renderField = () => {
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable, theme, type, value, onChange, inputFormCol, lock } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';
        const customType = (type) ? type : 'text';
        const config = this.getconfigField(inputId);
        const customStyleLabel = (config.requerido) ? { ...styleLabel, color: 'red' } : { ...styleLabel };

        if (config.visible) {
            const optionsInput = {
                id: inputId,
                name: name,
                type: customType,
                style: styles,
                placeholder: placeholder,
                disabled: !config.editable,
                className: `${theme.inputText} ${classText}`,
                value: value,
                onChange: (v) => onChange(v)
            }

            return (
                <>
                    <Col {...inputFormCol} >
                        <Row className={"form-group"}>
                            <label className={`${theme.inputLabel}  ${classLabel}`} style={customStyleLabel} >
                                {(config.label) ? config.label : label}
                            </label>
                            <Col className={classInput} style={{ ...divStyle }}>
                                {
                                    this.renderInput(optionsInput, config)
                                }
                            </Col>
                        </Row>
                    </Col>
                    {
                        lock && <Col className={theme.lock} sm={1}>
                            <FontAwesomeIcon icon={faLock} onClick={this.handleShowModal} style={{ cursor: 'pointer' }} />
                            <ModalValidate
                                showModal={this.state.showLockModal}
                                handleClose={this.handleCancelModal}
                                handleSubmit={this.handleSubmit}
                            />
                        </Col>
                    }
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

export default connect(mapStateToProps)(themr('InputTextStyle', styles)(InputText));