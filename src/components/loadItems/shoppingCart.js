import React, { Component } from 'react';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import LoadItemsTable from './loadItemsTable';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from './shoppingCart.module.css';
import DisplayAmount from 'components/common/displayAmount';


class ShoppingCart extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
        };
    }

    render() {
        const { showModal, handleClose, t, theme } = this.props;
        return (
                <Modal
                    show={showModal}
                    size="xl"
                    onHide={handleClose}
                    aria-labelledby="ModalHeader"
                    
                >                    
                <Modal.Header closeButton className={theme.divHeader}>
                    <Modal.Title id='ModalHeader' className={theme.divTitle} >
                       { t('shoppingCart.title')}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        {
                            //Temporal, no se conoce el componente.
                        }
                        <Col sm={6} style={{lineHeight:'1.4'}} >
                            <span style={{fontSize:'13pt'}}>Nota de Venta con Aprobación</span> <br/>
                            <span style={{fontSize:'9pt', color:'grey'}}>CCFCIAFC01101-ASOCIACION MUTUAL DE LA POLICIA DE FSA </span><br/>
                            <span style={{fontSize:'9pt', color:'grey'}}>0006-18/04/2019-Boris Nicolas Lucasvez</span>
                        </Col>
                        <Col  md={{ span:4, offset:2 }} sm style={{lineHeight:'1.4', fontWeight:'bold', fontSize:'11pt'}} >
                            <span> Total Ítems: 2</span> <br/>                    
                            <span>{`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={'3595,25'} /> </span><br/>
                            <span>{`${t('loadItem.table.total_gross_margin')} : 22.5%`}</span>
                        </Col>
                    </Row>
                    <LoadItemsTable />
                    <Row>
                        <Col  md={{ span:4, offset:8 }} sm style={{lineHeight:'1.4', fontWeight:'bold', fontSize:'11pt'}} >
                            <span> Total Ítems: 2</span> <br/>                    
                            <span>{`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={'3595,25'} /> </span><br/>
                            <span>{`${t('loadItem.table.total_gross_margin')} : 22.5%`}</span>
                        </Col>
                    </Row>
                </Modal.Body>
                        
                    
                </Modal>
        )
    }
}

export default themr('LoadItemsTableStyles', styles)(withTranslation()( ShoppingCart ));