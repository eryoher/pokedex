import React, { Component } from 'react';
import DisplayAmount from 'components/common/displayAmount';
import { Col } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';


class ProductsTotalResume extends Component {
    render() {
        const { data, t, formatCol } = this.props
        return (
            <Col md={formatCol} style={{ lineHeight: '1.4', fontWeight: 'bold', fontSize: '11pt' }} >
                <span> {`Total Ítems: ${data.total_item}`}</span> <br />
                <span>{`${t('loadItem.table.totalImp')} :`} <DisplayAmount amount={data.total_importe} /> </span><br />
                <span>{`${t('loadItem.table.total_gross_margin')} : ${data.total_margen_bruto}`}</span>
            </Col>
        )
    }
}

export default (withTranslation())(ProductsTotalResume);