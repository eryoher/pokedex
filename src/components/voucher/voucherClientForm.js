import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col , Button} from 'react-bootstrap';
import VoucherFormInput from './voucherFormInput';
import { withTranslation } from 'react-i18next';
import ClientFormInput from './clientFormInput';
import AccountFormInput from './accountFormInput'
import LocationFormInput from './locationFormInput';

class VoucherClientForm extends Component {
    render() {        
        const {t} = this.props;
        const initial= {}
        return (            
            <Col sm={12} className={"mb-5"} >
                <Formik
                    initialValues={{ ...initial }}
                    onSubmit={(values, actions) => {                                                        
                        
                    }}
                    validationSchema={Yup.object().shape({
                        //secuencia: Yup.number().required(t('validation-required', { field: t('Sequence') })).min(0, t('sequence-error-min')),
                        //descripcion: Yup.string().required(t('validation-required', { field: t('Description') })),                                
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit} className="voucher-info-form">
                            <Col >
                                <VoucherFormInput         
                                    {...{
                                        values,
                                        handleBlur,
                                        handleChange,
                                        errors,
                                        touched,
                                        isSubmitting,
                                        handleSubmit,
                                        setFieldValue,
                                        setFieldTouched
                                    }}
                                />
                            </Col>     
                            <div className="dropdown-divider col-11 p-2" />                       
                            <Col>
                                <ClientFormInput         
                                    {...{
                                        values,
                                        handleBlur,
                                        handleChange,
                                        errors,
                                        touched,
                                        isSubmitting,
                                        handleSubmit,
                                        setFieldValue,
                                        setFieldTouched
                                    }}
                                />
                                <LocationFormInput
                                    {...{
                                        values,
                                        handleBlur,
                                        handleChange,
                                        errors,
                                        touched,
                                        isSubmitting,
                                        handleSubmit,
                                        setFieldValue,
                                        setFieldTouched
                                    }}
                                />
                            </Col> 
                            <div className="dropdown-divider col-11 p-2" />                       
                            <Col>
                                <AccountFormInput
                                    {...{
                                        values,
                                        handleBlur,
                                        handleChange,
                                        errors,
                                        touched,
                                        isSubmitting,
                                        handleSubmit,
                                        setFieldValue,
                                        setFieldTouched
                                    }}
                                />
                            </Col>  
                            <Col style={{textAlign:'right'}} className={"mt-2"} >
                                <div className="btn btn-primary" style={{ height: '35px', fontSize: '16px', borderRadius:'10px'}} >
                                    <a style={{color:'#fff', textDecoration:'none'}} href={"/headerboard"}> {t('form.button.next')} </a>
                                </div>
                            </Col>                                     
                        </Form>
                    )}
                />
            </Col>            
        )
    }
}

export default (withTranslation()( VoucherClientForm ));

