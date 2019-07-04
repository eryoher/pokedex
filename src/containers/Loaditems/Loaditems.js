import React, { Component } from 'react';
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import Steps from '../../components/common/steps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DisplayAmount from 'components/common/displayAmount';
import LoadItemsTable from 'components/loadItems/loadItemsTable';

class Loaditems extends Component {

    render() {
        const { theme, t } = this.props;    
        
        const nextButton = {
            url:'/generate',            
        }
        
        const backButton = {
            url:'/headerboard',            
        }

        const steps = [
            {
                label:t('voucher.step.select_client'),                
                before:true,
            },
            {
                label:t('voucher.step.load_headboard'),
                before:true
            },
            {
                label:t('voucher.step.load_items'),
                main:true

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
                <Col sm={6} className={`${theme.Title} col-12 mt-3`} >
                    {t("loadItem.title")}
                </Col>
                <Col sm={4} className={"text-right  mt-3 mb-3"} >
                    Importe Total: <DisplayAmount amount={'3595,25'} />
                </Col>
                
                <Col sm={2} className={"text-center  mt-3"} >
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Col>
                <Steps
                    steps={steps} 
                    nextButton={nextButton}
                    backButton={backButton}
                />
                <LoadItemsTable />
                
            </Row>
        )
    }
}
export default (withTranslation()(withMenu( Loaditems )));