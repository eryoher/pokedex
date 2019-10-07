import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import InputDropdown from 'components/form/inputDropdown';
import { salesAffectedCant } from '../../actions/';
import ProductsTotalResume from 'components/loadItems/productsTotalResume';
import InvolvementTable from './involvementTable';
import InvolvementTotalResume from './involvementTotalResume';

class VoucherInvolvementTable extends Component {

    constructor(props) {
        super(props);
        this.optionsInput = [
            {
                id: 0,
                label: 'Todos'
            },
            {
                id: 1,
                label: 'Solo comprob.afectados(cant_afec <> 0)'
            },
            {
                id: 2,
                label: 'Solo comprob.sin afectar(cant_afec = 0)'
            }
        ]
    }

    componentDidMount = () => {
        this.props.salesAffectedCant();
    }

    render() {
        const { t, productsInvol, cantValidate } = this.props;
        const inputConfig = [{ idcampo: 'checkComprobAvencer', label: t('voucherInvolvement.form.sample'), visible: 1, requerido: 0, editable: 1 }]

        return (
            <Row style={{ marginLeft: '0px' }}>
                <Col className={"pl-4"} sm={3}>
                    <input type="checkbox" className={"form-check-input"} value="1" />
                    <label className={"form-check-label pt-1"}>
                        {t('voucherInvolvement.form.checkbox')}
                    </label>
                </Col>
                <Col sm={3} style={{ textAlign: 'center' }} >
                    <InputDropdown
                        inputFormCol={{ sm: 12 }}
                        fields={inputConfig}
                        label={t('voucherInvolvement.form.sample')}
                        inputId={'checkComprobAvencer'}
                        name={'checkComprobAvencer'}
                        placeholder={t('client.form.select_sample')}
                        styles={{ width: '100%' }}
                        colLabel={"col-sm-4"}
                        colInput={"col-sm-8"}
                        options={this.optionsInput}
                        onChange={(value) => {
                            console.log('value')
                        }}
                    />
                </Col>
                <Col sm={3}>
                    {productsInvol && <InvolvementTotalResume classDiv={'pl-5'} formatCol={{ span: 9, offset: 3 }} data={cantValidate} />}
                </Col>
                <Col sm={12} className={"pb-2"}>
                    {productsInvol &&
                        <InvolvementTable
                            products={productsInvol.Items}
                        />
                    }
                    {productsInvol && <InvolvementTotalResume classDiv={'pl-3'} formatCol={{ span: 4, offset: 7 }} data={cantValidate} />}
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype, salesAffected }) => {
    const { voucherType } = vouchertype;
    const { productsInvol, cantValidate } = salesAffected;
    return { voucherType, productsInvol, cantValidate };
};

export default connect(mapStateToProps, { salesAffectedCant })(withTranslation()(VoucherInvolvementTable));