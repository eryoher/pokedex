import React, { Component } from 'react'
import { Row, Col, Modal } from 'react-bootstrap';
import { themr } from 'react-css-themr';
import styles from './inputText.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import ModalValidate from 'components/headboard/modalValidate';


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

    handleSubmit = () => {
        this.handleCancelModal();
        this.props.handleSubmit()
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
        const { label, placeholder, name, styles, inputId, colInput, colLabel, styleLabel, divStyle, disable, theme, type, value, onChange, inputFormCol, lock } = this.props;
        const classInput = (label) ? colInput : "col-sm-12";
        const classLabel = (label) ? colLabel : "";
        const classText = (disable) ? theme.inputDisabled : '';
        const customType = (type) ? type : 'text';
        const config = this.getconfigField(inputId);
        const customStyleLabel = (config.requerido) ? { ...styleLabel, color: 'red' } : { ...styleLabel };

        if (config.visible) {
            return (
                <>
                    <Col {...inputFormCol} >
                        <Row className={"form-group"}>
                            <label className={`${theme.inputLabel}  ${classLabel}`} style={customStyleLabel} >
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
                    {lock && <Col className={theme.lock} sm={1}>
                        <FontAwesomeIcon icon={faLock} onClick={this.handleShowModal} style={{ cursor: 'pointer' }} />
                        <ModalValidate
                            showModal={this.state.showLockModal}
                            handleClose={this.handleCancelModal}
                            handleSubmit={this.handleSubmit}
                        />
                    </Col>}
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

export default themr('InputTextStyle', styles)(InputText);