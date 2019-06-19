import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import Steps from '../../components/common/steps';
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import GenerateForm from 'components/generate/GenerateForm';

class Generate extends Component {
    render() {
        const {t} = this.props

        const steps = [
            {
                label:t('voucher.step.select_client'),                
                before:true,
            },
            {
                label:t('voucher.step.load_headboard'),
                before:true,
                
            },
            {
                label:t('voucher.step.load_items'),
                before:true,

            },
            {
                label:t('voucher.step.affectation_vouchers'),
                before:true,

            },
            {
                label:t('voucher.step.generate'),
                main:true
            },            
            
        ]
        return (
            <Row className="container" >
                <Col sm={12} className={"title mt-3 "} style={{fontSize:'14pt'}} >
                    {t("voucher.title")}
                </Col>
                <Steps steps={steps} />
                <GenerateForm />
            </Row>
        )
    }
}

export default (withTranslation()(withMenu( Generate )));