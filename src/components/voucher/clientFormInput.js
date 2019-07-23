import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import InputText from 'components/form/inputText';
import { withTranslation } from 'react-i18next';
import InputDropdown from '../form/inputDropdown'


class ClientFormInput extends Component {

    handleChange = (select) => {
        const { Sucursales } = this.props.values;
        const val = select.target.value;
        let result = null;
        Sucursales.forEach(opt => {
            if (opt.suc_nro === val) {
                result = opt;
            }
        });

        this.setValues(result);
    }

    setValues = (data) => {

        const { setFieldValue } = this.props;
        if (data) {
            setFieldValue('suc_email', data.suc_email);
            setFieldValue('suc_tel', data.suc_tel);
            setFieldValue('suc_address', `${data.suc_calle} ${data.suc_piso}`);
            setFieldValue('suc_local', data.suc_local);
            setFieldValue('suc_nom_prov', data.suc_nom_prov);
            setFieldValue('suc_cpos', data.suc_cpos);
        } else {
            setFieldValue('suc_email', '');
            setFieldValue('suc_tel', '');
            setFieldValue('suc_address', '');
            setFieldValue('suc_local', '');
            setFieldValue('suc_nom_prov', '');
            setFieldValue('suc_cpos', '');
        }
    }


    render() {
        const { t, errors, touched, values, handleChange, handleBlur, setFieldValue, setFieldTouched, readOnly, fields } = this.props;
        const optionsSelect = (values.Sucursales) ? values.Sucursales : [];

        const options = optionsSelect.map((opt) => {
            return ({ id: opt.suc_nro, label: opt.suc_nom });
        })

        return (
            <Row>
                <InputDropdown
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.client_branch')}
                    inputId={'sucursales'}
                    name={'sucursales'}
                    placeholder={t('client.form.insert_client_branch')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    options={options}
                    disable={readOnly}
                    onChange={this.handleChange}

                />
                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.contact')}
                    inputId={'contacto'}
                    name={'contacto'}
                    placeholder={t('client.form.insert_contact')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                    value={values.contacto}
                    onChange={(data) => {
                        setFieldValue('contacto', data.target.value);
                    }}
                />
                <Row className={'col-11'} style={{ paddingRight: '0px' }} >
                    <InputText
                        inputFormCol={{ sm: 6 }}
                        fields={fields}
                        label={t('client.form.phone')}
                        inputId={'suc_tel'}
                        name={'suc_tel'}
                        placeholder={t('client.form.insert_phone')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        disable={readOnly}
                        divStyle={{ paddingLeft: '17px' }}
                        value={values.suc_tel}
                        onChange={(data) => {
                            setFieldValue('suc_tel', data.target.value);
                        }}
                    />

                    <InputText
                        inputFormCol={{ sm: 6, style: { paddingRight: '0px' } }}
                        fields={fields}
                        label={t('client.form.email')}
                        inputId={'suc_email'}
                        name={'suc_email'}
                        placeholder={t('client.form.insert_email')}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        styleLabel={{ textAlign: 'right' }}
                        disable={readOnly}
                        value={values.suc_email}
                        onChange={(data) => {
                            setFieldValue('suc_email', data.target.value);
                        }}
                    />
                </Row>
                <InputText
                    inputFormCol={{ sm: 11 }}
                    fields={fields}
                    label={t('client.form.address')}
                    inputId={'suc_address'}
                    name={'suc_address'}
                    placeholder={t('client.form.insert_address')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    disable={readOnly}
                    value={values.suc_address}
                    onChange={(data) => {
                        setFieldValue('suc_address', data.target.value);
                    }}
                />

            </Row>
        )
    }
}

export default (withTranslation()(ClientFormInput));
