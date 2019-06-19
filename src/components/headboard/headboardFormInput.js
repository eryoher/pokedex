import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt  } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from 'components/form/inputDropdown';


class HeadBoardFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly } = this.props;    
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
                        label={t('headboard.form.company_branch')}
                        inputId={'companyBranch'}
                        name={'companyBranch'}
                        placeholder={t('voucher.headboard.form.insert_company_branch')}
                        styles={{width:'100%'}}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        options={ optionsSelect }
                        disable={readOnly}
                    />
                </Col> 
                <Col sm={6}>
                    <InputText
                        label={t('headboard.form.voucher')}
                        inputId={'voucher'}
                        name={'voucher'}
                        placeholder={t('headboard.form.insert_voucher')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'0px'}}
                        disable={readOnly}
                    />
                </Col>
                <Col sm={6}>
                    <InputText
                        label={t('headboard.form.date')}
                        inputId={'date'}
                        name={'date'}
                        placeholder={t('headboard.form.insert_date')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        styleLabel={{textAlign:'right'}}
                        disable={readOnly}
                    />
                </Col>                
                <Col sm={6}>    
                    <InputDropdown
                        label={t('headboard.form.currency')}
                        inputId={'currency'}
                        name={'currency'}
                        placeholder={t('headboard.form.insert_currency')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'0px'}}                        
                        options={ optionsSelect }
                        disable={readOnly}
                    />               
                </Col>
                <Col sm={6}>
                    <InputText
                        label={t('headboard.form.quotation')}
                        inputId={'quotation'}
                        name={'quotation'}
                        placeholder={t('headboard.form.insert_quotation')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        styleLabel={{textAlign:'right'}}
                        disable={readOnly}
                    />
                </Col>
                <Col sm={6}>    
                    <InputDropdown
                        label={t('headboard.form.saler')}
                        inputId={'saler'}
                        name={'saler'}
                        placeholder={t('headboard.form.insert_saler')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'0px'}}                        
                        options={ optionsSelect }
                        disable={readOnly}
                        
                    />               
                </Col>
                <Col sm={6}>
                    <InputDropdown
                        label={t('headboard.form.condSale')}
                        inputId={'condSale'}
                        name={'condSale'}
                        placeholder={t('headboard.form.insert_condition_sale')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        styleLabel={{ textAlign:'right' }}                    
                        options={ optionsSelect }
                        disable={readOnly}
                    /> 
                </Col>
                <Col sm={6}>
                    <InputDropdown
                        label={t('headboard.form.carrier')}
                        inputId={'carrier'}
                        name={'carrier'}
                        placeholder={t('headboard.form.insert_carrier')}                        
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle= {{paddingLeft:'0px'}}                        
                        options={ optionsSelect }
                        disable={readOnly}
                    /> 
                </Col>
            </Row>
        )
    }
}

export default (withTranslation()( HeadBoardFormInput ));
