import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Row, Col , Button} from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { themr } from 'react-css-themr';
import styles from './loginForm.module.css';
import InputGroupText from 'components/form/inputGroupText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import InputButton from 'components/form/inputButton';
import { LANDING } from '../../utils/RoutePath';

class LoginForm extends Component {
    render() {        
        const {t, theme} = this.props;
        const initial= {}
        return (            
            <Col sm={12} className={"mb-1"} style={{margin:'0px auto'}} >
                <Formik
                    initialValues={{ ...initial }}
                    onSubmit={(values, actions) => {                                                        
                        
                    }}
                    validationSchema={Yup.object().shape({
                        //username: Yup.number().required(t('validation-required', { field: t('Sequence') })).min(0, t('sequence-error-min')),
                        //password: Yup.string().required(t('validation-required', { field: t('Description') })),                                
                    })}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit} className="voucher-info-form">
                            <Col sm={12}>
                                <InputGroupText
                                    label={t('login.form.username')}
                                    inputId={'username'}
                                    name={'username'}
                                    placeholder={t('login.form.insert_username')}                        
                                    colLabel={"col-3 offset-3"}
                                    colInput={"col-6"}
                                    beforeInput={ <FontAwesomeIcon icon={faUser} /> }                                
                                    styles = {{ width:'60%', backgroundColor:'#E8F0FD', border:'#E8F0FD', color:'#000' }}
                                    stylesGroup = {{ backgroundColor:'#E8F0FD', border:'#E8F0FD' }}
                                />
                            </Col>                           
                            <Col sm={12}>
                                <InputGroupText
                                    label={t('login.form.password')}
                                    inputId={'password'}
                                    name={'password'}
                                    type={'password'}
                                    placeholder={t('login.form.insert_password')}                        
                                    colLabel={"col-3 offset-3"}
                                    colInput={"col-6"}     
                                    beforeInput={ <FontAwesomeIcon icon={faLock} /> }                            
                                    styles = {{ width:'60%', backgroundColor:'#E8F0FD', border:'#E8F0FD' }}
                                    stylesGroup = {{backgroundColor:'#E8F0FD', border:'#E8F0FD'}}
                                />
                            </Col>                              
                            <Col style={{textAlign:'left', paddingLeft:'15px'}} className={"mt-2 col-6 offset-3"} >
                                <InputButton 
                                    valueButton={t('login.form.submit')}
                                    urlForm={LANDING}
                                />
                            </Col> 
                        </Form>                        
                    )}
                />
            </Col>
        )
    }
}

export default themr('LoginFormStyles', styles)(withTranslation()( LoginForm ));