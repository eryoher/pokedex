import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import InputDropdown from 'components/form/inputDropdown';
import { salesAffectedCant } from '../../actions/';
import ProductsTotalResume from 'components/loadItems/productsTotalResume';
import InvolvementTable from './involvementTable';

class VoucherInvolvementTable extends Component {

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
                        options={[]}
                        onChange={(value) => {
                            console.log('value')
                        }}
                    />
                </Col>
                <Col sm={3}>
                    {productsInvol && <ProductsTotalResume formatCol={{ span: 10, offset: 3 }} data={cantValidate} />}
                </Col>
                <Col sm={12} className={"pt-5 pb-3"}>
                    {productsInvol &&
                        <InvolvementTable
                            products={productsInvol.Items}
                        />
                    }
                    {productsInvol && <ProductsTotalResume formatCol={{ span: 4, offset: 7 }} data={cantValidate} />}
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