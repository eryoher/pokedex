import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPercent } from '@fortawesome/free-solid-svg-icons';
import CommonTable from 'components/common/commonTable';
import CollapseBotton from 'components/common/collapseBoton';
import InputText from 'components/form/inputText';
import DisplayLight from 'components/common/displayLight';
import DisplayAmount from 'components/common/displayAmount';
import { themr } from 'react-css-themr';
import styles from './itemsTable.module.css';
import SearchBox from 'components/common/searchBox';
import { selectFilter } from 'react-bootstrap-table2-filter';
import PopupImage from 'components/common/popupImage';
import { connect } from 'react-redux';
import { getConfigVoucher } from '../../actions';
const Items = [
    {
        id: 1,
        cod_prod: 'KLN000003',
        desc_prod: 'KLONAL AMOX-G 500 MG X 90 ML 51%',
        unid_v: 'UN',
        ind_stock: '100',
        status: 'R',
        cufOrigin: '20032',
        pcio_unit: '38.79',
        neto: '3879',
        fec_entrega: '07/02/2019',
        client: 14297,
        avisos: 1,
    },
    {
        id: 2,
        cod_prod: 'KLN000007',
        desc_prod: 'KLONAL DIPIRONA K JARABE 5GR 100 ML 55%',
        unid_v: 'UN',
        ind_stock: '0',
        status: 'V',
        cufOrigin: '20020',
        pcio_unit: '37.42',
        neto: '0',
        fec_entrega: '06/22/2019',
        avisos: 2,
    }
]

const optionsDeal = {
    1: 'Por la compra de 5 lleva la 6 gratis.',
    2: '3 x 2'
}

class LoadItemsTable extends Component {

    componentDidMount = () => {
        this.props.getConfigVoucher({ cod_proceso: 'P_CargaItemenVentas', idOperacion: 1 });
    }

    getColumns = () => {
        const { config } = this.props;
        const columns = [];

        const rows = config.campos.map((field) => {

            return {
                dataField: field.idcampo,
                text: (field.label) ? field.label : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
                hidden: !field.visible,
                formatter: (field.editable) ? ((cell, row, rowIndex) => {
                    return (
                        <InputText
                            inputFormCol={{ sm: 11 }}
                            fields={[{ ...field, label: false }]} //Propiedades.. del campo se envia el label en false
                            label={false}
                            inputId={field.idcampo}
                            name={field.idcampo}
                            colLabel={"col-sm-2"}
                            colInput={"col-sm-10"}
                            disable={false}
                            value={cell}
                            onChange={(data) => {
                                console.log(field.idcampo, data);
                            }}
                        />
                    )
                }) : null,
            }

        });

        console.log(rows)

        return rows;
    }


    render() {
        const { theme, t, searchBox, divClass, config, search } = this.props;

        const tableColumns = (config) ? this.getColumns() : [];


        const columns = [
            {
                dataField: 'picture',
                text: '',
                align: 'rigth',
                headerStyle: { width: '2%' },
                formatter: ((cell, row, rowIndex) => {
                    return (
                        <PopupImage src={cell} />
                    )
                }),
            },
            {
                dataField: 'code',
                text: t('global.code'),
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
            }, {
                dataField: 'description',
                text: t('global.description'),
                align: 'left',
                headerAlign: 'center',
                headerStyle: { width: '20%' },
            }, {
                dataField: 'unit',
                text: t('global.unit'),
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '5%' },
            }, {
                dataField: 'quantity',
                text: t('global.quantity'),
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '7%' },
                formatter: ((cell, row, rowIndex) => {
                    return (
                        <InputText
                            value={cell}
                            type={'number'}
                            styles={{ padding: '0.375rem' }}
                        />
                    )
                }),
            }, {
                dataField: 'status',
                text: '',
                headerAlign: 'center',
                align: 'center',
                headerStyle: { width: '2%' },
                formatter: ((cell, row, rowIndex) => {
                    return (
                        <DisplayLight semaforo={cell} />
                    )
                }),
            }, {
                dataField: 'cufOrigin',
                text: t('loadItem.table.cufOrigin'),
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
            }, {
                dataField: 'unitPrice',
                text: t('loadItem.table.unitPrice'),
                align: 'right',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
                formatter: ((cell, row, rowIndex) => {
                    return (
                        <DisplayAmount amount={cell} />
                    )
                }),
            }, {
                dataField: 'netAmount',
                text: t('loadItem.table.netAmount'),
                align: 'right',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
                formatter: ((cell, row, rowIndex) => {
                    return (
                        <DisplayAmount amount={cell} />
                    )
                }),
            }, {
                dataField: 'deliveryDate',
                text: t('loadItem.table.deliveryDate'),
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '10%' },
            }, {
                dataField: 'deal',
                text: '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '8%' },
                title: (cell, row, rowIndex, colIndex) => {
                    return optionsDeal[cell];
                },
                filter: selectFilter({
                    options: optionsDeal,
                    className: `${theme.inputFilter} mt-2`,
                    placeholder: t('global.deal')
                }),
                formatter: ((cell, row, rowIndex) => {
                    const result = (cell) ? <FontAwesomeIcon icon={faPercent} /> : null;
                    return (
                        result
                    )
                }),
            }, {
                dataField: 'actions',
                text: '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '5%' },
                formatter: ((cell, row, rowIndex) => {
                    return (
                        <FontAwesomeIcon icon={faShoppingCart} />
                    )
                }),

            }
        ];

        const noExpand = [1, 3];

        const expandRow = {
            renderer: row => (
                <Row className={"container mt-2"}>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.therapeutic_action')}:`}</b> Analgésico, antipirético y espasmolítico
                </Col>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.require_cold_chain')}:`}</b> No
                </Col>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.monodroga')}:`}</b> Dipirona
                </Col>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.labt_manufacturer')}:`}</b> Klonal
                </Col>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.previos_price')}:`}</b> <DisplayAmount amount={35} />
                    </Col>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.export_IMS')}:`}</b> Se exportan datos del producto.
                </Col>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.traceability_type')}:`}</b> Ninguna
                </Col>
                    <Col className={"col-6 p-2"}>
                        <b>{`${t('loadItem.table.last_update_date')}:`}</b> 02/05/2019 9:07:50
                </Col>
                </Row>
            ),
            showExpandColumn: true,
            nonExpandable: noExpand,
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                return <CollapseBotton status={isAnyExpands} />
            },
            expandColumnRenderer: ({ expanded, rowKey }) => {
                if (!(rowKey in noExpand)) {
                    return <CollapseBotton status={expanded} />
                }
            },
        };

        return (
            <Row className={divClass}>
                {searchBox && <SearchBox />}
                {config && search.Productos && <Col className={`${divClass} col-12`}>
                    <CommonTable
                        columns={tableColumns}
                        data={search.Productos}
                        rowClasses={theme.tableRow}
                        headerClasses={theme.tableHeader}
                        expandRow={expandRow}
                    />
                </Col>}
            </Row>
        )
    }
}



const mapStateToProps = ({ voucher, product }) => {
    const { config } = voucher;
    const { search } = product
    return { config, search };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher })(LoadItemsTable);

export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));