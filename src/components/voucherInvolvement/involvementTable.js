import React, { Component } from 'react'
import CommonTable from 'components/common/commonTable'
import { Col } from 'react-bootstrap'

export default class InvolvementTable extends Component {

    constructor(props) {
        super(props);
        this.columns = [
            {
                dataField: 'fec_entrega',
                text: 'Fecha',
                headerStyle: { width: '10%' },
                sort: true,
            },
            {
                dataField: 'comprobante',
                text: 'Comprobante',
                headerStyle: { width: '12%' },
                sort: true

            },
            {
                dataField: 'cod_prod',
                text: 'Producto',
                sort: true
            },
            {
                dataField: 'desc_prod',
                text: 'Detalle',
                headerStyle: { width: '15%' }

            },
            {
                dataField: 'cantidad',
                text: 'Cant. Pend.'
            },
            {
                dataField: 'unid_v',
                text: 'Unidad',
                headerStyle: { width: '5%' }

            },
            {
                dataField: 'cant_afect',
                text: 'Cantidad Afectada',
                headerStyle: { width: '10%', color: 'red' }
            },
            {
                dataField: 'precio_unit',
                text: 'Precio Unitario',
                headerStyle: { width: '10%', color: 'red' }

            },
            {
                dataField: 'neto',
                text: 'Neto',
                headerStyle: { width: '10%', color: 'red' }

            },
            {
                dataField: 'saldo',
                text: 'Saldo',
                headerStyle: { width: '10%' }

            }

        ]
    }


    render() {
        const { products } = this.props;
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            selectColumnPosition: 'right'
        };

        const defaultSorted = [{
            dataField: 'fec_entrega',
            order: 'desc'
        }];


        return (
            <Col className={`col-12`}>
                <CommonTable
                    columns={this.columns}
                    keyField={'id'}
                    data={products}
                    selectRow={selectRow}
                    defaultSorted={defaultSorted}
                //rowClasses={theme.tableRow}
                //headerClasses={theme.tableHeader}

                />
            </Col>
        )
    }
}
