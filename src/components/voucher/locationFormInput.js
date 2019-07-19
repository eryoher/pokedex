import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';


class LocationFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly } = this.props;    
        
        return (
            <Row>                 
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.location')}
                            inputId={'dom_local'}
                            name={'dom_local'}
                            placeholder={t('client.form.insert_location')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle= {{paddingLeft:'17px'}}
                            disable={readOnly}
                            value={values.dom_local}
                            onChange={ (data) => {
                                setFieldValue('dom_local', data.target.value);                            
                            }} 
                        />
                    </Col>
                    <Col sm={6} style={{paddingRight:'0px'}} >
                        <InputText
                            label={t('client.form.province')}
                            inputId={'dom_nom_prov'}
                            name={'dom_nom_prov'}
                            placeholder={t('client.form.insert_province')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle= {{paddingLeft:'23px'}}
                            styleLabel={{textAlign:'right'}}
                            disable={readOnly}
                            value={values.dom_nom_prov}
                            onChange={ (data) => {
                                setFieldValue('dom_nom_prov', data.target.value);                            
                            }} 
                        />
                    </Col> 
                </Row>
                <Row className={'col-11'} style={{paddingRight:'0px'}} >
                    <Col sm={6}>
                        <InputText
                            label={t('client.form.postalCode')}
                            inputId={'dom_cpos'}
                            name={'dom_cpos'}
                            placeholder={t('client.form.insert_postal_code')}                        
                            colLabel={"col-sm-4"}
                            colInput={"col-sm-8"}
                            divStyle= {{paddingLeft:'17px'}}
                            disable={readOnly}
                            value={values.dom_cpos}
                            onChange={ (data) => {
                                setFieldValue('dom_cpos', data.target.value);                            
                            }} 
                        />
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default (withTranslation()( LocationFormInput ));
