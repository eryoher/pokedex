import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from '../form/inputDropdown'
import InputTextArea from '../form/inputTextArea'


class AccountFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly } = this.props;    
        
        return (
            <Row>                                
                <Col sm={11}>    
                    <InputTextArea
                        label={t('client.form.obs_current_account')}
                        inputId={'current_account'}
                        name={'current_account'}
                        placeholder={t('client.form.insert_obs_current_account')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        cols={3}
                        rows={3}
                        disable={readOnly}
                    />
                </Col>                
                <Col sm={11}>    
                    <InputTextArea
                        label={t('client.form.obs_sales')}
                        inputId={'obsSales'}
                        name={'obsSales'}
                        placeholder={t('client.form.insert_obs_sales')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        cols={3}
                        rows={3}
                        disable={readOnly}
                    />
                </Col> 
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.limit_credit')}
                            inputId={'limitCredit'}
                            name={'limitCredit'}                                             
                            placeholder={t('client.form.insert_limit_credit')}               
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle= {{paddingLeft:'17px'}}
                            disable={readOnly}
                        />
                    </Col>
                    <Col sm={6} style={{paddingRight:'0px'}}>
                        <InputText
                            label={t('client.form.pendingCredit')}
                            inputId={'pendingCredit'}
                            name={'pendingCredit'}
                            placeholder={t('client.form.insert_pending_credit')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}                            
                            styleLabel={{textAlign:'right', paddingRight:'0px'}}
                            disable={readOnly}
                        />
                    </Col> 
                </Row>
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.balance')}
                            inputId={'balance'}
                            name={'balance'}
                            placeholder={t('client.form.insert_client_balance')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            disable={readOnly}
                            divStyle= {{paddingLeft:'17px'}}
                        />
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default (withTranslation()( AccountFormInput ));
