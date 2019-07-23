import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';


class LocationFormInput extends Component {
    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly, fields } = this.props;

        return (
            <Row>
                <Row className={'col-11'} style={{ paddingRight: '0px' }} >

                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.location')}
                        inputId={'suc_local'}
                        name={'suc_local'}
                        placeholder={t('client.form.insert_location')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '17px' }}
                        disable={readOnly}
                        value={values.suc_local}
                        onChange={(data) => {
                            setFieldValue('suc_local', data.target.value);
                        }}
                    />

                    <InputText
                        inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                        fields={fields}
                        label={t('client.form.province')}
                        inputId={'suc_nom_prov'}
                        name={'suc_nom_prov'}
                        placeholder={t('client.form.insert_province')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '23px' }}
                        styleLabel={{ textAlign: 'right' }}
                        disable={readOnly}
                        value={values.suc_nom_prov}
                        onChange={(data) => {
                            setFieldValue('suc_nom_prov', data.target.value);
                        }}
                    />
                </Row>
                <Row className={'col-11'} style={{ paddingRight: '0px' }} >
                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.postalCode')}
                        inputId={'suc_cpos'}
                        name={'suc_cpos'}
                        placeholder={t('client.form.insert_postal_code')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        divStyle={{ paddingLeft: '17px' }}
                        disable={readOnly}
                        value={values.suc_cpos}
                        onChange={(data) => {
                            setFieldValue('suc_cpos', data.target.value);
                        }}
                    />
                </Row>
            </Row>
        )
    }
}

export default (withTranslation()(LocationFormInput));
