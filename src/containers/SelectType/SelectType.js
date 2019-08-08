import React, { Component } from 'react'
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import VoucherClientForm from 'components/voucher/voucherClientForm';
import { connect } from 'react-redux';
import { getVoucherType } from '../../actions';
import VoucherBreadCrumbs from 'components/voucher/voucherBreadCrumbs';
import SelectForm from 'components/selectType/selectForm';


class SelectType extends Component {

    constructor(props) {
        super(props)
        this.state = {
            type: null
        }
    }

    render() {
        const { t, theme, voucherType } = this.props

        return (
            <Row>
                <Col sm={12} className={theme.Title} >
                    {t("selectType.title")}
                </Col>
                <Col sm={12} className={theme.Title} >
                    <SelectForm />
                </Col>

            </Row>
        )
    }
}

const mapStateToProps = ({ vouchertype }) => {
    const { voucherType } = vouchertype;
    return { voucherType };
};

export default connect(mapStateToProps, { getVoucherType })(withTranslation()(withMenu(SelectType)));