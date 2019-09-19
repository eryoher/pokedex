import React, { Component } from 'react'
import InputText from 'components/form/inputText'
import { setTableDataProducts } from '../../actions';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import ModalPriceUnit from './modalPriceUnit';
import { withTranslation } from 'react-i18next';

class InputPriceUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    handleCancelModal = () => {
        this.setState({ showModal: false });
    }

    handleSubmit = (selectPrice) => {
        const { row } = this.props
        const params = { niprod: row.niprod, idcampo: 'precio_unit', value: selectPrice }
        const newPrice = (parseFloat(row.cantidad) * parseFloat(selectPrice)) / parseFloat(row.base_v);
        const paramsNeto = { niprod: row.niprod, idcampo: 'neto', value: newPrice.toString() }
        this.props.setTableDataProducts(params);
        this.props.setTableDataProducts(paramsNeto);
    }

    render() {
        const { optionsInput, row, t } = this.props;
        return (
            <Row>
                <InputText
                    {...optionsInput}
                    inputFormCol={{ sm: 10 }}
                    divStyle={{ paddingRight: '5px', paddingLeft: "17px" }}
                    onBlur={(value) => {
                        const customValue = (value) ? parseFloat(value.split(',').join('.')) : 0;
                        const customCantidad = (row.cantidad) ? parseFloat(row.cantidad) : 0;
                        const newPrice = (customCantidad * customValue) / parseFloat(row.base_v);
                        const params = { niprod: row.niprod, idcampo: 'neto', value: newPrice.toString() }
                        this.props.setTableDataProducts(params);
                        this.props.setTableDataProducts({ niprod: row.niprod, idcampo: 'precio_unit', value: value });
                    }}
                />
                <Col sm={1} style={{ paddingLeft: '0px', paddingTop: '8%' }} >
                    <span style={{ cursor: 'pointer' }} onClick={this.openModal} > ...</span>
                </Col>
                <ModalPriceUnit
                    {...this.props}
                    showModal={this.state.showModal}
                    handleClose={this.handleCancelModal}
                    handleSubmit={this.handleSubmit}
                />
            </Row>
        )
    }
}

const mapStateToProps = ({ product }) => {
    const { productsUpdate } = product

    return { productsUpdate };
};

export default connect(mapStateToProps, { setTableDataProducts })(withTranslation()(InputPriceUnit));
