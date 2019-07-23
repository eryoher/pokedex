import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Card, Collapse } from 'reactstrap'
import HeadboardFormInput from '../headboard/headboardFormInput'
import VoucherFormInput from 'components/voucher/voucherFormInput';
import ClientFormInput from 'components/voucher/clientFormInput';
import AccountFormInput from 'components/voucher/accountFormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import LocationFormInput from 'components/voucher/locationFormInput';
import CollapseBotton from 'components/common/collapseBoton';
import { themr } from 'react-css-themr';
import styles from './generateForm.module.css';
import InputButton from 'components/form/inputButton';
import { LOADITEMS } from '../../utils/RoutePath';

class GenerateForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render() {
        const { t, theme } = this.props;

        const defaultInitial = {
            rsocial: '',
            tipo_resp: '',
            cuit: '',
            contacto: '',
            obs_cc: '',
            obs_ventas: '',
            credito: '',
            saldo_pend: '',
            credito_saldo: '',
            suc_email: '',
            suc_tel: '',
            suc_address: '',
            suc_local: '',
            suc_nom_prov: '',
            suc_cpos: '',
        }
        return (
            <Col sm={12}>
                <Card className={`pb-3 pt-3 ${theme.containerCard}`}  >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('client.title')}
                        </Col>
                        <Col sm={5} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <VoucherFormInput
                        auoptions={[]}
                        values={defaultInitial}
                        readOnly

                    />
                    <div className="dropdown-divider col-11 p-1" />
                    <ClientFormInput
                        auoptions={[]}
                        values={defaultInitial}
                        readOnly
                    />
                    <Row>
                        <Col sm={1}>
                            <CollapseBotton
                                onPress={() => this.toggle()}
                                status={this.state.collapse}
                            />
                        </Col>
                        <Col sm={11}>
                            <div className="dropdown-divider col-11 p-1" />
                        </Col>
                    </Row>
                    <Collapse isOpen={this.state.collapse}>
                        <LocationFormInput
                            values={defaultInitial}
                            readOnly

                        />
                        <div className="dropdown-divider col-11 p-1" />
                        <AccountFormInput
                            readOnly
                            values={defaultInitial}
                        />
                    </Collapse>
                </Card>
                <Card className={`pb-3 mt-3 pt-3 mb-4 ${theme.containerCard}`} >
                    <Row className={"mb-3"}>
                        <Col sm={6} className={theme.title} >
                            {t('headboard.title')}
                        </Col>
                        <Col sm={5} className={"text-right"} >
                            <FontAwesomeIcon icon={faPencilAlt} />
                        </Col>
                    </Row>
                    <HeadboardFormInput
                        readOnly
                        collapse
                    />
                </Card>
                <Col style={{ textAlign: 'left' }} className={"mt-2 col-1 "} >
                    <InputButton
                        backButton
                        urlForm={LOADITEMS}
                    />

                </Col>
            </Col>
        )
    }
}


export default themr('GenerateFormStyle', styles)(withTranslation()(GenerateForm));