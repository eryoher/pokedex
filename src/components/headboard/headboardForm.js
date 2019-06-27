import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col , Button} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import HeadboardFormInput from './headboardFormInput';
import { themr } from 'react-css-themr';
import headboardStyles from './headBoardForm.module.css';

class HeadboardForm extends Component {
    render() {        
        const {t, theme} = this.props;
        const initial= {}
        return (            
            <Col sm={12}>
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
                                <HeadboardFormInput   
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
                            <div className="dropdown-divider col-11 p-1" />                       
                            <Row>
                                <Col sm={6} style={{textAlign:'left'}} className={"mt-2"} >                                    
                                    <div className={`btn btn-primary ${theme.formButton}`} >
                                        <a style={{color:'#fff', textDecoration:'none'}} href={"/voucher"}> {t('form.button.back')} </a>
                                    </div>
                                </Col>          
                                <Col sm={5} style={{textAlign:'right'}} className={"mt-2"} >                                    
                                    <div className={`btn btn-primary ${theme.formButton}`} >
                                        <a style={{color:'#fff', textDecoration:'none'}} href={"/generate"}> {t('form.button.next')} </a>
                                    </div>
                                </Col>                                     
                            </Row>
                        </Form>
                    )}
                />
            </Col>            
        )
    }
}

export default themr('HeadBoardTheme', headboardStyles)(withTranslation()( HeadboardForm ));