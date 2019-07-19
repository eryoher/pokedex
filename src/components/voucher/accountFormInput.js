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
                        inputId={'obs_cc'}
                        name={'obs_cc'}
                        placeholder={t('client.form.insert_obs_current_account')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        cols={3}
                        rows={3}
                        disable={readOnly}
                        value={values.obs_cc}
                        onChange={ (data) => {
                            setFieldValue('obs_cc', data.target.value);                            
                        }} 
                    />
                </Col>                
                <Col sm={11}>    
                    <InputTextArea
                        label={t('client.form.obs_sales')}
                        inputId={'obs_ventas'}
                        name={'obs_ventas'}
                        placeholder={t('client.form.insert_obs_sales')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        cols={3}
                        rows={3}
                        disable={readOnly}
                        value={values.obs_ventas}
                        onChange={ (data) => {
                            setFieldValue('obs_ventas', data.target.value);                            
                        }} 
                    />
                </Col> 
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.limit_credit')}
                            type={'number'}
                            inputId={'credito'}
                            name={'credito'}                                             
                            placeholder={t('client.form.insert_limit_credit')}               
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle= {{paddingLeft:'17px'}}
                            disable={readOnly}
                            value={values.credito}
                            onChange={ (data) => {
                                setFieldValue('credito', data.target.value);                            
                            }} 
                        />
                    </Col>
                    <Col sm={6} style={{paddingRight:'0px'}}>
                        <InputText
                            label={t('client.form.pendingCredit')}
                            inputId={'saldo_pend'}
                            name={'saldo_pend'}
                            placeholder={t('client.form.insert_pending_credit')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}                            
                            styleLabel={{textAlign:'right', paddingRight:'0px'}}
                            disable={readOnly}
                            value={values.saldo_pend}
                            onChange={ (data) => {
                                setFieldValue('saldo_pend', data.target.value);                            
                            }} 
                        />
                    </Col> 
                </Row>
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.balance')}
                            inputId={'credito_saldo'}
                            name={'credito_saldo'}
                            placeholder={t('client.form.insert_client_balance')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            disable={readOnly}
                            divStyle= {{paddingLeft:'17px'}}
                            value={values.credito_saldo}
                            onChange={ (data) => {
                                setFieldValue('credito_saldo', data.target.value);                            
                            }} 
                        />
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default (withTranslation()( AccountFormInput ));
