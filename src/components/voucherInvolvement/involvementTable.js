import React, { Component } from 'react';
import CommonTable from 'components/common/commonTable';
import { Col } from 'react-bootstrap';
import styles from './involvementTable.module.css';
import { themr } from 'react-css-themr';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { getConfigVoucher, setTableDataInvolvement, salesAffectedValidate } from '../../actions/';
import InputText from 'components/form/inputText';
import InputPriceUnit from 'components/loadItems/inputPriceUnit';

class InvolvementTable extends Component {

    constructor(props) {
        super(props);
        this.inputRefs = {};
        this.state = {
            rowSelected: []
        }

    }

    componentDidMount = () => {
        this.props.getConfigVoucher({ cod_proceso: 'p_afectcomprob', idOperacion: 1 });
    }

    getColumns = () => {
        const { config } = this.props;
        const rows = config.campos.map((field) => {
            return {
                dataField: field.idcampo,
                text: (field.label) ? field.label : '',
                align: 'center',
                headerAlign: 'center',
                headerStyle: this.getStyleColumn(field),
                hidden: !field.visible,
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


        return rows;
    }

    getStyleColumn = (field) => {
        const idField = field.idcampo;

        let style = {};

        switch (idField) {
            case 'desc_prod':
                style = { width: '15%' }
                break;
            case 'fec_entrega':
                style = { width: '13%' }
                break;
            case 'avisos':
                style = { width: '8%' }
                break;
            case 'ind_stock':
                style = { width: '3%' }
                break;
            case 'precio_unit':
                style = { width: '13%' }
                break;
            case 'neto':
                style = { width: '13%' }
                break;
            case 'unid_v':
                style = { width: '15%' }
                break;
            default:
                style = { width: '10%' }
                break;

        }

        if (field.requerido === '1') {
            style.color = 'red';
        }

        return style;
    }

    renderFormat = (field, value, row) => {

        let result = null;
        const inputError = (value === 'error_input') ? true : false;
        const customValue = (value === 'error_input') ? '' : value;
        const inputStyle = (field.idcampo === 'cantidad' || field.idcampo === 'precio_unit' || field.idcampo === 'neto') ? { textAlign: 'right' } : {}
        const { focusInput } = this.props;

        if (field.editable && !this.inputRefs[field.idcampo]) {
            this.inputRefs[field.idcampo] = {}
        }

        if (field.editable && !this.inputRefs[field.idcampo][row.niprod]) {
            const customRef = React.createRef();
            this.inputRefs[field.idcampo][row.niprod] = customRef
        }

        const optionsInput = {
            fwRef: (field.editable) ? this.inputRefs[field.idcampo][row.id] : null,
            inputFormCol: { sm: 12 },
            fields: [{ ...field, label: false }],
            label: false,
            inputId: `${field.idcampo}`,
            id: `${field.idcampo}_${row.niprod}`,
            name: `${field.idcampo}_${row.niprod}`,
            colLabel: "col-sm-4",
            colInput: "col-sm-8",
            divStyle: { paddingLeft: '17px' },
            disable: false,
            value: customValue,
            showError: inputError,
            styles: inputStyle,
            rowStyle: { marginBottom: '5px' },
            onChange: () => { }
        }

        if (field.idcampo === 'ind_stock') {
        } else if (field.idcampo === 'precio_unit') {
            result = (
                <InputPriceUnit
                    optionsInput={optionsInput}
                    setData={this.props.setTableDataInvolvement}
                    handleFocus={(rowId) => {
                        // Focus next input                           
                        if (row.niprod === rowId) {
                            this.handleSetFocus('neto', row.niprod);
                        }
                        return true;

                    }}
                    row={row}
                />
            )
        } else {

            result = (
                <InputText
                    {...optionsInput}
                    autoFocus={(focusInput && focusInput.input === 'neto' && focusInput.rowId === row.niprod) ? true : false}
                    handleEnterKey={(e, value) => {
                        /* if (field.idcampo === 'cantidad') {
                             // Focus next input            
                             this.props.getPriceByProduct({
                                 "IdOperacion": 123456, //Falta adicionar id Operacion.
                                 "Idproducto": row.niprod,
                                 "cantidad": value,
                                 "unid_vta": row.unid_v
                             });
                             this.handleSetFocus('precio_unit', row.niprod);
                         } else if (field.idcampo === 'neto') {
                             this.handleSetFocus('fec_entrega', row.niprod);
                         }*/
                        return true;
                    }}
                    onBlur={(value) => {
                        /*if (field.idcampo === 'cantidad') { //pendiente logica.
                            this.props.getPriceByProduct({
                                "IdOperacion": 123456, //Falta adicionar id Operacion.
                                "Idproducto": row.niprod,
                                "cantidad": value,
                                "unid_vta": row.unid_v
                            });

                        } else if (field.idcampo === 'neto') {
                            const newValue = (value) ? parseFloat(value.split(',').join('.')) : 0;
                            const cantidad = (row.cantidad) ? parseFloat(row.cantidad) : 0;

                            const newPrice = (parseFloat(row.base_v) * newValue) / cantidad;
                            const params = { niprod: row.niprod, idcampo: 'precio_unit', value: newPrice.toString() }
                            const paramsNeto = { niprod: row.niprod, idcampo: 'neto', value: newValue.toString() }
                            this.props.setTableDataProducts([params, paramsNeto]);
                        } else {*/
                        const params = { niprod: row.niprod, idcampo: field.idcampo, value };
                        this.props.setTableDataInvolvement([params]);
                        //}
                    }}
                />
            )

        }

        return result;

    }

    handleClickRow = (row) => {
        console.log(row);
    }



    render() {
        const { products, theme, config, productsUpdate, cantValidate } = this.props;
        const tableColumns = (config && products) ? this.getColumns() : [];

        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            selectColumnPosition: 'right',
            onSelect: (row, isSelect, rowIndex, e) => {

                const rows = (this.state.rowSelected) ? this.state.rowSelected : [];
                if (isSelect) { //Se adiciona                    
                    rows.push({ Nimovcli: row.nimovcli, Nitem: row.nitem, Cant_afec: row.cant_afec });
                } else { //Se resta
                    rows.forEach((toDelete, index) => {
                        if (toDelete.Nimovcli === row.nimovcli) {
                            rows.splice(index, 1);
                        }
                    });
                }
                this.setState({ rowSelected: rows });
                console.log(rows)
                this.props.salesAffectedValidate({ idOperacion: row.nimovcli /*item: rows*/ }); //Falta adicionar idOperacion

            },
            onSelectAll: (isSelect, rows, e) => {
                let selected = []
                if (isSelect) {
                    selected = rows.map(fila => {
                        return ({ Nimovcli: fila.nimovcli, Nitem: fila.nitem, Cant_afec: fila.cant_afec });
                    });
                }

                this.setState({ rowSelected: selected });
                this.props.salesAffectedValidate({ idOperacion: 12345, item: selected }); //Falta adicionar idOperacion

            }
        };

        const defaultSorted = [{
            dataField: 'fec_entrega',
            order: 'desc'
        }];

        const rowData = (products) ? products.map((prod) => {
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


        return (
            <Col className={`col-12`}>
                {config && <CommonTable
                    columns={tableColumns}
                    keyField={'nimovcli'}
                    data={rowData}
                    selectRow={selectRow}
                    defaultSorted={defaultSorted}
                    rowClasses={theme.tableRow}
                    headerClasses={theme.tableHeader}

                />}
            </Col>
        )
    }
}

const mapStateToProps = ({ voucher, salesAffected }) => {
    const { config } = voucher;
    const { productsUpdate, cantValidate } = salesAffected;
    return { config, productsUpdate, cantValidate };
};

const connectForm = connect(mapStateToProps, { getConfigVoucher, setTableDataInvolvement, salesAffectedValidate })(InvolvementTable);

export default themr('InvolvementTableStyles', styles)(withTranslation()(connectForm));