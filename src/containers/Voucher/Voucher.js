import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import Steps from '../../components/common/steps';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import VoucherClientForm from 'components/voucher/voucherClientForm';
import { HEADERBOARD } from '../../utils/RoutePath';

class Voucher extends Component {
    render() {
        const {t, theme} = this.props
        const nextButton = {
            url:HEADERBOARD,
        }
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
            <Row>
                <Col sm={12} className={theme.Title} >
                    {t("voucher.title")}
                </Col>
                <Steps 
                    steps={steps} 
                    nextButton={nextButton}
                />

                <VoucherClientForm />
            </Row>
        )
    }
}

export default (withTranslation()(withMenu( Voucher )));