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
        const optionsSelect = [
            {
                id:1, 
                label:"Opción 1"
            },
            {
                id:2, 
                label:"Opción 2"
            },
            {
                id:3, 
                label:"Opción 3"
            },            
        ]
        return (
            <Row>
                <Col sm={11}>    
                    <InputDropdown
                        label={t('client.form.client_branch')}
                        inputId={'clientBranch'}
                        name={'clientBranch'}
                        placeholder={t('client.form.insert_client_branch')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        options={ optionsSelect }
                        disable={readOnly}
                    />
                </Col>                
                <Col sm={11}>    
                    <InputText
                        label={t('client.form.contact')}
                        inputId={'contact'}
                        name={'contact'}
                        placeholder={t('client.form.insert_contact')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        disable={readOnly}
                    />
                </Col>                
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.phone')}
                            inputId={'phone'}
                            name={'phone'}
                            placeholder={t('client.form.insert_phone')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}                            
                            disable={readOnly}
                            divStyle={{ paddingLeft:'17px' }}    
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
                        />
                    </Col>
                </Row>
                <Col sm={11}>    
                    <InputText
                        label={t('client.form.address')}
                        inputId={'address'}
                        name={'address'}
                        placeholder={t('client.form.insert_address')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        disable={readOnly}
                    />
                </Col>                 
            </Row>
        )
    }
}

export default (withTranslation()( ClientFormInput ));
