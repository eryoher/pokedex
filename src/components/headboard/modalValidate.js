import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';

import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';

import DisplayAmount from 'components/common/displayAmount';
import InputButton from 'components/form/inputButton';


class ModalValidate extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            inputValue: ''
        };
    }

    handleSubmit = () => {
        const { handleSubmit } = this.props;
        handleSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {
        const { showModal, handleClose, t } = this.props;
        return (
            <Modal
                show={showModal}
                onHide={handleClose}
                aria-labelledby="ModalHeader"

            >
                <Modal.Header closeButton >
                    <Modal.Title id='ModalHeader'  >
                        {t('form.input.validate_input')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className={"form-group m-3 text-center"}>
                        <label>
                            {t('login.form.password')}
                        </label>
                        <Col>
                            <input
                                type={"password"}
                                style={{}}
                                placeholder={t("login.form.insert_password")}
                                value={this.state.inputValue}
                                onChange={(v) => {
                                    this.setState({ inputValue: v.target.value })
                                }}
                            />
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose} variant="secondary">{t('form.button.close')}</Button>
                    <Button onClick={this.handleSubmit} variant="primary">{t('form.button.submit')}</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default (withTranslation()(ModalValidate));