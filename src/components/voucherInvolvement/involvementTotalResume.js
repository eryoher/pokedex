import React, { Component } from 'react';
import DisplayAmount from 'components/common/displayAmount';
import { Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';


class InvolvementTotalResume extends Component {
    render() {
        const { data, t, formatCol, classDiv } = this.props
        const totalItem = (data && data.total_item) ? data.total_item : 0;
        const totalImporte = (data && data.total_importe) ? data.total_importe : 0;
        const totalquantity = (data && data.total_margen_bruto) ? data.total_margen_bruto : 0;


        return (
            <Col className={classDiv} md={formatCol} style={{ lineHeight: '1.4', fontWeight: 'bold', fontSize: '11pt' }} >
                <span> {`Total Ítems: ${totalItem}`}</span> <br />
                <span>{`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={totalImporte} /> </span><br />
                <span>{`${t('voucherInvolvement.table.total_item_quantity')} : ${totalquantity}`}</span>
            </Col>
        )
    }
}

export default (withTranslation())(InvolvementTotalResume);
