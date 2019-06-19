import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col , Button} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import HeadboardFormInput from './headboardFormInput';

class HeadboardForm extends Component {
    render() {        
        const {t} = this.props;
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
                            <div className="dropdown-divider col-11 p-2" />                       
                            <Row>
                                <Col sm={6} style={{textAlign:'left'}} className={"mt-2"} >
                                    <Button href={"/voucher"}  style={{ height: '33px', borderRadius: '7px',fontSize: '14px' }}  type="button" className="btn btn-primary voucher-form-button" >
                                        {t('form.button.back')}
                                    </Button>
                                </Col>          
                                <Col sm={5} style={{textAlign:'right'}} className={"mt-2"} >
                                    <Button href={"/generate"}  style={{ height: '33px', fontSize: '14px' }}  type="button" className="btn btn-primary voucher-form-button">
                                        {t('form.button.next')}
                                    </Button>
                                </Col>                                     
                            </Row>
                        </Form>
                    )}
                />
            </Col>            
        )
    }
}

export default (withTranslation()( HeadboardForm ));

