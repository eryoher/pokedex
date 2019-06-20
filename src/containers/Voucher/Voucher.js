import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import Steps from '../../components/common/steps';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import VoucherClientForm from 'components/voucher/voucherClientForm';

class Voucher extends Component {
    render() {
        const {t, theme} = this.props
        console.log(theme.Title)

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
                <Col sm={12} className={theme.Title} >
                    {t("voucher.title")}
                </Col>
                <Steps steps={steps} />
                <VoucherClientForm />
            </Row>
        )
    }
}

export default (withTranslation()(withMenu( Voucher )));