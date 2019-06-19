import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import {Card} from 'reactstrap'
import HeadboardFormInput from '../headboard/headboardFormInput'
import VoucherFormInput from 'components/voucher/voucherFormInput';
import ClientFormInput from 'components/voucher/clientFormInput';
import AccountFormInput from 'components/voucher/accountFormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
class GenerateForm extends Component {
    render() {      
        const {t} = this.props;
        return (            
            <Col sm={12}>
                <Card className={"pb-3 pt-5"} style={{paddingLeft:'4rem', borderRadius:'40px'}} >
                    <Row className={"mb-5"}>
                        <Col sm={6} style={{textAlign:'left', fontWeight:"bold", fontSize:'14pt'}} >
                            { t('client.title') }
                        </Col>
                        <Col sm={5} style={{textAlign:'right'}} >
                            <FontAwesomeIcon icon={faPencilAlt} /> 
                        </Col>
                    </Row>

                    <VoucherFormInput readOnly />
                    <div className="dropdown-divider col-11 p-2" />                       
                    <ClientFormInput readOnly />
                    <div className="dropdown-divider col-11 p-2" />   
                    <AccountFormInput readOnly />                                                         
                </Card>
                <Card className={"pb-3 mt-5 pt-5"} style={{paddingLeft:'4rem', borderRadius:'40px'}} >
                    <Row className={"mb-5"}>
                        <Col sm={6} style={{textAlign:'left', fontWeight:"bold", fontSize:'14pt'}} >
                            { t('headboard.title') }
                        </Col>
                        <Col sm={5} style={{textAlign:'right'}} >
                            <FontAwesomeIcon icon={faPencilAlt} /> 
                        </Col>
                    </Row>
                    <HeadboardFormInput readOnly />                
                </Card>
                
                
                
            </Col>            
        )
    }
}

export default (withTranslation()( GenerateForm ));

