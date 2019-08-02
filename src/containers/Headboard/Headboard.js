import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import HeadboardForm from 'components/headboard/headboardForm';
import { connect } from 'react-redux';

import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';

class Headboard extends Component {
    render() {
        const { t, voucherType } = this.props;

        return (
            <Row className="" >
                <Col sm={12} className={"title mt-3 "} style={{ fontSize: '14pt' }} >
                    {t("voucher.title")}
                </Col>

                <VoucherBreadCrumbs
                    crumbs={(voucherType) ? voucherType.procesos : []}
                    current={'p_vtacab'}
                />
                <HeadboardForm />
            </Row>
        )
    }
}



const mapStateToProps = ({ vouchertype }) => {
    const { voucherType } = vouchertype;
    return { voucherType };
};

export default connect(mapStateToProps)(withTranslation()(withMenu(Headboard)));