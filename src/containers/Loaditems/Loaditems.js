import React, { Component } from 'react';
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import Steps from '../../components/common/steps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import DisplayAmount from 'components/common/displayAmount';
import LoadItemsTable from 'components/loadItems/loadItemsTable';
import ShoppingCart from 'components/loadItems/shoppingCart';
import InputButton from 'components/form/inputButton';
import { HEADERBOARD, GENERATE } from '../../utils/RoutePath';

class Loaditems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleOpen = () => {        
        this.setState({ showModal: true });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }
    

    render() {
        const { theme, t } = this.props;

        const nextButton = {
            url: GENERATE,
        }

        const backButton = {
            url: HEADERBOARD,
        }

        const steps = [
            {
                label: t('voucher.step.select_client'),
                before: true,
            },
            {
                label: t('voucher.step.load_headboard'),
                before: true
            },
            {
                label: t('voucher.step.load_items'),
                main: true

            },
            {
                label: t('voucher.step.affectation_vouchers'),
            },
            {
                label: t('voucher.step.generate'),
            },

        ]

        return (
            <Row>
                <Col sm={12}>
                    <ShoppingCart
                        showModal={this.state.showModal}
                        handleClose = {this.handleClose}

                    />
                </Col>
                <Col sm={6} className={`${theme.Title} col-12 mt-3`} >
                    {t("loadItem.title")}
                </Col>
                <Col sm={4} className={"text-right  mt-3 mb-3"} >
                    {`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={'3595,25'} />
                </Col>

                <Col sm={2} className={"text-center  mt-3"} >
                    <FontAwesomeIcon icon={faShoppingCart} onClick={this.handleOpen} />
                </Col>
                {
                    //Temporal, no se conoce el componente.
                }
                <Col sm={6} style={{lineHeight:'1.4'}} >
                    <span style={{fontSize:'13pt'}}>Nota de Venta con Aprobación</span> <br/>
                    <span style={{fontSize:'9pt', color:'grey'}}>CCFCIAFC01101-ASOCIACION MUTUAL DE LA POLICIA DE FSA </span><br/>
                    <span style={{fontSize:'9pt', color:'grey'}}>0006-18/04/2019-Boris Nicolas Lucasvez</span>
                </Col>
                
                <Col sm={12}>
                    <Steps
                        steps={steps}
                        nextButton={nextButton}
                        backButton={backButton}
                    />
                </Col>
                <Col sm={12}>                    
                    <LoadItemsTable
                        searchBox
                        divClass = {"mt-4"}
                    />
                </Col>
                <Col sm={1} style={{textAlign:'left', paddingLeft:'2rem'}} className={"mt-2"} >                                    
                    <InputButton
                        backButton
                        urlForm={HEADERBOARD}
                    />
                </Col>          
                <Col style={{textAlign:'center'}} className={"mt-2 col-2 offset-9"} >                                                                        
                    <InputButton
                        nextButton
                        urlForm={GENERATE}
                    />
                </Col>   
            </Row>
            
        )
    }
}
export default (withTranslation()(withMenu(Loaditems)));