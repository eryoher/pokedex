import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from '../form/inputDropdown'


class ClientFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched } = this.props;    
        const optionsSelect = [
            {
                id:1, 
                label:"Optcion 1"
            },
            {
                id:2, 
                label:"Optcion 2"
            },
            {
                id:3, 
                label:"Optcion 3"
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
                    />
                </Col>                
                <Col sm={6}>
                    <InputText
                        label={t('client.form.phone')}
                        inputId={'phone'}
                        name={'phone'}
                        placeholder={t('client.form.insert_phone')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'0px'}}
                    />
                </Col>
                <Col sm={6}>
                    <InputText
                        label={t('client.form.email')}
                        inputId={'email'}
                        name={'email'}
                        placeholder={t('client.form.insert_email')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'23px'}}
                        styleLabel={{textAlign:'right'}}
                    />
                </Col>
                <Col sm={11}>    
                    <InputText
                        label={t('client.form.address')}
                        inputId={'address'}
                        name={'address'}
                        placeholder={t('client.form.insert_address')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                    />
                </Col> 
                <Col sm={6}>
                    <InputText
                        label={t('client.form.location')}
                        inputId={'location'}
                        name={'location'}
                        placeholder={t('client.form.insert_location')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'0px'}}
                    />
                </Col>
                <Col sm={6}>
                    <InputText
                        label={t('client.form.province')}
                        inputId={'province'}
                        name={'province'}
                        placeholder={t('client.form.insert_province')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'23px'}}
                        styleLabel={{textAlign:'right'}}
                    />
                </Col> 
                <Col sm={11}>
                    <InputText
                        label={t('client.form.postalCode')}
                        inputId={'postalCode'}
                        name={'postalCode'}
                        placeholder={t('client.form.insert_postal_code')}                        
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                    />
                </Col>
            </Row>
        )
    }
}

export default (withTranslation()( ClientFormInput ));
