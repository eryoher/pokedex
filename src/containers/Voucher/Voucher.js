import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import Steps from '../../components/common/steps';
import { withTranslation } from 'react-i18next';

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
            <div className="container" >
                <Steps steps={steps} />
                Prueba nuevo form. editando... 
            </div>
        )
    }
}

export default (withTranslation()(withMenu( Voucher )));