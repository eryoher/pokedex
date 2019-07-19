import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Col } from 'react-bootstrap';
import VoucherFormInput from './voucherFormInput';
import { withTranslation } from 'react-i18next';
import ClientFormInput from './clientFormInput';
import AccountFormInput from './accountFormInput'
import LocationFormInput from './locationFormInput';
import InputButton from 'components/form/inputButton';
import { connect } from 'react-redux';
import { searchClients, getVoucherType, getClient } from '../../actions';
import { HEADERBOARD } from '../../utils/RoutePath';


class VoucherClientForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    componentDidMount = () => {
        //this.props.getVoucherType({ idComprobante:1,  idOperacion:1});
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.search !== prevProps.search && this.props.search.length) {
            this.setState({ loading: false });
        }
    }

    handleSearch = (value) => {
        this.props.searchClients({ criterio_cliente: value, idOperacion: 1 });
        this.setState({ loading: true });
    }

    handleSelect = (client) => {
        const selected = client[0];
        this.props.getClient({ cod_cliente: selected.Cod_cliente });
    }

    render() {
        const { search, client } = this.props;
        const defaultInitial = {
            rsocial: '',
            tipo_resp: '',
            cuit: '',
            contacto: '',
            tel: '',
            email: '',
            dom_calle: '',
            dom_local: '',
            dom_nom_prov: '',
            dom_cpos: '',
            obs_cc: '',
            obs_ventas: '',
            credito: '',
            saldo_pend: '',
            credito_saldo: ''
        }

        const initial = (client) ? client : defaultInitial;
        return (
            <Col sm={12} className={"mb-1"} >

                <Formik
                    initialValues={{ ...initial }}
                    onSubmit={(values, actions) => {

                    }}
                    validationSchema={Yup.object().shape({
                        //secuencia: Yup.number().required(t('validation-required', { field: t('Sequence') })).min(0, t('sequence-error-min')),
                        //descripcion: Yup.string().required(t('validation-required', { field: t('Description') })),                                
                    })}
                    enableReinitialize={true}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit} className="voucher-info-form">
                            <Col>
                                <VoucherFormInput
                                    handleSearch={this.handleSearch}
                                    auoptions={search}
                                    handleLoading={this.state.loading}
                                    handleSelect={this.handleSelect}
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
                            <div className="dropdown-divider col-11 p-1" />
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
                            <Col style={{ textAlign: 'left', paddingLeft: '0px' }} className={"mt-2 offset-11 col-1"} >
                                <InputButton
                                    nextButton
                                    urlForm={HEADERBOARD}
                                />
                            </Col>
                        </Form>
                    )}
                />
            </Col>
        )
    }
}

const mapStateToProps = ({ clients }) => {
    const { search, client } = clients;
    return { search, client };
};

export default connect(mapStateToProps, { searchClients, getVoucherType, getClient })(withTranslation()(VoucherClientForm));