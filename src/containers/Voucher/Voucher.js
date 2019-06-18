import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import Steps from '../../components/common/steps';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPencilAlt  } from '@fortawesome/free-solid-svg-icons'
import VoucherClientForm from 'components/voucher/voucherClientForm';

class Voucher extends Component {
    render() {
        const {t} = this.props

        const steps = [
            {
                label:t('voucher.step.select_client'),
                main:true
            },
            {
                label:t('voucher.step.load_headboard'),
            },
            {
                label:t('voucher.step.load_items'),
            },
            {
                label:t('voucher.step.affectation_vouchers'),
            },
            {
                label:t('voucher.step.generate'),
            },            
            
        ]
        return (
            <Row className="container" >
                <Steps steps={steps} />
                <VoucherClientForm />
            </Row>
        )
    }
}

export default (withTranslation()(withMenu( Voucher )));