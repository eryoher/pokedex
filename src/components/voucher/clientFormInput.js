import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from '../form/inputDropdown'


class ClientFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly } = this.props;    
        const optionsSelect = (values.Sucursales) ? values.Sucursales : [];
        const options = optionsSelect.map((opt)=>{
            return({id:opt.suc_nro, label:opt.suc_nom});
        })

        return (
            <Row>
                <Col sm={11}>    
                    <InputDropdown
                        label={t('client.form.client_branch')}
                        inputId={'sucursales'}
                        name={'sucursales'}
                        placeholder={t('client.form.insert_client_branch')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        options={ options }
                        disable={readOnly}
                    />
                </Col>                
                <Col sm={11}>    
                    <InputText
                        label={t('client.form.contact')}
                        inputId={'contacto'}
                        name={'contacto'}
                        placeholder={t('client.form.insert_contact')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        disable={readOnly}
                        value={values.contacto}
                        onChange={ (data) => {
                            setFieldValue('contacto', data.target.value);                            
                        }} 
                    />
                </Col>                
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.phone')}
                            inputId={'tel'}
                            name={'tel'}
                            placeholder={t('client.form.insert_phone')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}                            
                            disable={readOnly}
                            divStyle={{ paddingLeft:'17px' }}   
                            value={values.tel}
                            onChange={ (data) => {
                              setFieldValue('tel', data.target.value);                            
                            }}  
                        />
                    </Col>
                    <Col sm={6} style={{paddingRight:'0px'}}>
                        <InputText
                            label={t('client.form.email')}
                            inputId={'email'}
                            name={'email'}
                            placeholder={t('client.form.insert_email')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}                            
                            styleLabel={{textAlign:'right'}}
                            disable={readOnly}
                            value={values.email}
                            onChange={ (data) => {
                              setFieldValue('email', data.target.value);                            
                            }} 
                        />
                    </Col>
                </Row>
                <Col sm={11}>    
                    <InputText
                        label={t('client.form.address')}
                        inputId={'dom_calle'}
                        name={'dom_calle'}
                        placeholder={t('client.form.insert_address')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        disable={readOnly}
                        value={values.dom_calle}
                        onChange={ (data) => {
                            setFieldValue('dom_calle', data.target.value);                            
                        }} 
                    />
                </Col>                 
            </Row>
        )
    }
}

export default (withTranslation()( ClientFormInput ));
