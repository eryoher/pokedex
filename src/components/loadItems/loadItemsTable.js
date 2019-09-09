import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPercent } from '@fortawesome/free-solid-svg-icons';
import CommonTable from 'components/common/commonTable';
import CollapseBotton from 'components/common/collapseBoton';
import InputText from 'components/form/inputText';
import DisplayLight from 'components/common/displayLight';
import { themr } from 'react-css-themr';
import styles from './itemsTable.module.css';
import SearchBox from 'components/common/searchBox';
import { selectFilter, Comparator } from 'react-bootstrap-table2-filter';
import PopupImage from 'components/common/popupImage';
import { connect } from 'react-redux';
import { getConfigVoucher, setTableDataProducts, getPriceByProduct, getLoadItems } from '../../actions';
import InputDropdown from 'components/form/inputDropdown';


class LoadItemsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterVal: null
        }
    }

    componentDidMount = () => {
        this.props.getConfigVoucher({ cod_proceso: 'P_CargaItemenVentas', idOperacion: 1 });
    }

    handleAddToCart = (row) => {

        const params = {
            idOperacion: 221223, //Falta idoperacion
            niprod: row.niprod,
            /*cod_unid: row.unid_v,
            cantidad: row.cantidad,
            precio_unit: row.precio_unit,
            neto: row.neto,
            fecha_entrega: row.fec_entrega*/ //Se comenta temporal hasta usar servicios reales.
        }

        this.props.getLoadItems(params);

    }

    getOptionsDeal = () => {
        const { search } = this.props;
        let result = {};
        if (search.bonificaciones) {
            search.bonificaciones.forEach(bonif => {
                result[bonif.cod_bonif] = bonif.desc_bonif
            });
        }
        return result;
    }

    getWithColumn = (idField) => {
        switch (idField) {
            case 'desc_prod':
                return { width: '15%' }
            case 'fec_entrega':
                return { width: '13%' }
            case 'avisos':
                return { width: '8%' }
            case 'ind_stock':
                return { width: '3%' }
            case 'precio_unit':
                return { width: '13%' }
            case 'neto':
                return { width: '13%' }
            default:
                return { width: '10%' }

        }

        //(field.idcampo === 'desc_prod' || field.idcampo === 'fec_entrega') ? { width: '15%' } : { width: '10%' }
    }

    getColumns = () => {
        const { config, theme } = this.props;

        const rows = config.campos.map((field) => {
            return {
                dataField: field.idcampo,
                text: (field.label) ? field.label : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getWithColumn(field.idcampo),
                hidden: !field.visible,
                title: (field.idcampo === 'avisos') ? (cell, row, ) => {
                    let title = '';
                    row.Bonificaciones.forEach(bonif => {
                        title = `${title} ${bonif.desc_bonif}`
                    });

                    return title;
                } : null,

                filter: (field.idcampo === 'avisos') ? selectFilter({
                    options: this.getOptionsDeal(),
                    className: `${theme.inputFilter} mt-2`,
                    placeholder: 'Oferta',
                    onFilter: filterVal => this.setState({ filterVal }),
                }) : null,

                filterValue: (cell, row) => {
                    const filter = []
                    row.Bonificaciones.forEach(bonif => {
                        if (bonif.cod_bonif === this.state.filterVal) {
                            filter.push(bonif.cod_bonif)
                        }
                    });

                    return filter;
                },
                formatter: (field.editable || field.idcampo === 'avisos' || field.idcampo === 'ind_stock') ? ((cell, row, rowIndex) => {
                    return this.renderFormat(field, cell, row)
                }) : null
            }

        });

        rows.push(
            {
                dataField: 'actions',
                text: '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: { width: '5%' },
                formatter: ((cell, row, rowIndex) => {
                    if (row.fec_entrega) {
                        return (
                            <a href={'#'} onClick={() => this.handleAddToCart(row)}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        )
                    } else {
                        return (

                            <FontAwesomeIcon icon={faShoppingCart} />

                        )
                    }
                }),

            }
        )

        return [{
            dataField: 'id_imagen',
            text: '',
            align: 'rigth',
            headerStyle: { width: '2%' },
            formatter: ((cell, row, rowIndex) => {
                return (
                    <PopupImage src={cell} />
                )
            }),
        }].concat(rows);
    }

    renderFormat = (field, value, row) => {
        let result = null;

        const optionsInput = {
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: field.idcampo,
            name: field.idcampo,
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '17px' },
            disable: false,
            value: value,
            onChange: () => { }
        }

        if (field.idcampo === 'avisos') {
            result = (row.Bonificaciones.length) ? <FontAwesomeIcon icon={faPercent} /> : null
        } else if (field.idcampo === 'unid_v') {
            const selectOptions = (row.presentaciones) ? row.presentaciones.map(pre => {
                return { id: pre.cod_pres, label: pre.desc_pres }
            }) : []
            result = (
                <InputDropdown
                    {...optionsInput}
                    options={selectOptions}
                    onChange={(data) => {
                        const value = data.target.value;
                        this.props.setTableDataProducts({ niprod: row.niprod, idcampo: field.idcampo, value });
                    }}
                />
            )
        } else if (field.idcampo === 'ind_stock') {
            result = (<DisplayLight semaforo={value} />)
        } else {
            result = (
                <InputText
                    {...optionsInput}
                    onBlur={(value) => {
                        const params = { niprod: row.niprod, idcampo: field.idcampo, value }
                        this.props.setTableDataProducts(params)
                        if (field.idcampo === 'cantidad') {
                            this.props.getPriceByProduct({
                                "IdOperacion": 123456, //Falta adicionar id Operacion.
                                "Idproducto": row.niprod,
                                "cantidad": value,
                                "unid_vta": row.unid_v
                            });
                        }
                    }}
                />
            )
        }

        return result;

    }

    renderExpandRow = (row) => {
        const cols = [];
        let result;
        if (row.Atributos && row.Atributos.length) {
            row.Atributos.forEach((atrb, index) => {
                cols.push(
                    <Col key={index} className={"col-6 p-2"}>
                        <b>{`${atrb.desc_atributo}:`}</b> {atrb.desc_dato}
                    </Col>
                )
            });
            result = (
                <Row className={"container mt-2"}>
                    {cols}
                </Row>
            )

        }

        return result;
    }

    getNoexpandRows = () => {
        const { search } = this.props;
        const result = []
        if (search && search.Productos) {
            search.Productos.forEach(prd => {
                if (!prd.Atributos || prd.Atributos.length === 0) {
                    result.push(parseInt(prd.niprod));
                }
            });
        }

        return result;
    }

    validateKey = (key, rows) => {
        let result = false;
        rows.forEach(row => {
            if (row === key) {
                result = true;
            }
        });
        return result;

    }

    render() {
        const { theme, t, searchBox, divClass, config, search, productsUpdate } = this.props;
        const tableColumns = (config && search) ? this.getColumns() : [];
        const noExpand = this.getNoexpandRows();
        const expandRow = {
            renderer: row => this.renderExpandRow(row),
            showExpandColumn: true,
            nonExpandable: noExpand,
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
                return <CollapseBotton status={isAnyExpands} />
            },
            expandColumnRenderer: ({ expanded, rowKey }) => {
                if (!this.validateKey(rowKey, noExpand)) {
                    return <CollapseBotton status={expanded} />
                }
            },
        };

        const rowData = (search.Productos) ? search.Productos.map((prod) => {
            let result = {};

            if (productsUpdate) {
                productsUpdate.forEach(update => {
                    if (update.niprod === prod.niprod) {
                        result = {
                            ...update,
                            id: prod.niprod
                        }
                    }
                });

            } else {
                result = {
                    ...prod,
                    id: prod.niprod
                }
            }

            return result;

        }) : null;

        //console.log(rowData, '????')
        return (
            <Row className={divClass}>
                {searchBox && <SearchBox />}
                {config && rowData &&
                    <Col className={`${divClass} col-12`}>
                        <CommonTable
                            columns={tableColumns}
                            data={rowData}
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
    const { search, productsUpdate } = product
    return { config, search, productsUpdate };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, setTableDataProducts, getPriceByProduct, getLoadItems })(LoadItemsTable);

export default themr('LoadItemsTableStyles', styles)(withTranslation()(connectForm));