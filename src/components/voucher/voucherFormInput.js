import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { searchClients } from '../../actions';
import InputAutocomplete from 'components/form/inputAutocomplete';

class VoucherFormInput extends Component {

    componentDidMount() {
    }

    render() {
        const { t,
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            setFieldValue,
            setFieldTouched,
            readOnly,
            handleSearch,
            auoptions,
            handleLoading,
            handleSelect,
            fields
        } = this.props;

        console.log(fields);

        return (
            <Row>
                <Col sm={11}>
                    <InputAutocomplete
                        label={false}
                        inputId={'clienteId'}
                        name={'clienteId'}
                        placeholder={t('voucher.form.insert_customer_criterion')}
                        styles={{ width: '100%' }}
                        colLabel={"col-sm-2"}
                        colInput={"col-sm-10"}
                        handleSearch={handleSearch}
                        auoptions={auoptions}
                        handleLoading={handleLoading}
                        handleSelect={handleSelect}
                        labelKey={"Rsocial"}
                    />
                </Col>

                {!readOnly && <Col sm={1}>
                    <FontAwesomeIcon icon={faPlus} />
                </Col>}

                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('voucher.form.business_name')}
                    inputId={'rsocial'}
                    name={'rsocial'}
                    placeholder={t('voucher.form.insert_business_name')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                    value={values.rsocial}
                    onChange={(data) => {
                        setFieldValue('rsocial', data.target.value);
                    }}
                />

                {!readOnly && <Col sm={1}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Col>}

                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('voucher.form.code')}
                    inputId={'code'}
                    name={'code'}
                    placeholder={t('voucher.form.insert_code_client')}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                />

                <Row className={"col-11"} style={{ paddingRight: '0px' }} >
                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('voucher.form.responsible_type')}
                        inputId={'tipo_resp'}
                        name={'tipo_resp'}
                        placeholder={t('voucher.form.insert_responsible_type')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        disable={readOnly}
                        styleLabel={{ paddingRight: '0px' }}
                        divStyle={{ paddingLeft: '17px' }}
                        value={values.tipo_resp}
                        onChange={(data) => {
                            setFieldValue('tipo_resp', data.target.value);
                        }}
                    />
                    <InputText
                        inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                        fields={fields}
                        label={t('voucher.form.cuit')}
                        inputId={'cuit'}
                        name={'cuit'}
                        placeholder={t('voucher.form.insert_cuit')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '23px' }}
                        disable={readOnly}
                        styleLabel={{ textAlign: 'right' }}
                        value={values.cuit}
                        onChange={(data) => {
                            setFieldValue('cuit', data.target.value);
                        }}
                    />
                </Row>
            </Row>
        )
    }
}


export default withTranslation()(VoucherFormInput);