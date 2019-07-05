import React, { Component } from 'react';
import withMenu from '../../components/common/withMenu'
import { withTranslation } from 'react-i18next';
import { Row, Col } from 'react-bootstrap';
import CommonTable from 'components/common/commonTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye  } from '@fortawesome/free-solid-svg-icons';
import { selectFilter, textFilter, dateFilter, customFilter, Comparator } from 'react-bootstrap-table2-filter';
import InputButton from 'components/form/inputButton';

const voucher = [
    {
        id:0,
        date:'07/02/2019',
        client:14297,
        type:1,
        voucher:235655,
        detail:'Notas de venta sin Aprobacion',
        branch:'0',
        total:'16649.50'
    },
    {
        id:1,        
        date:'06/22/2019',
        client:14922,
        type:2,
        voucher:235656,
        detail:'Notas de venta sin Aprobacion',
        branch:'0',
        total:'98569.50'

    }
]

const selectOptions = {
    14297: 'Ericson Hernandez',
    14922: 'Yohany Hernandez',
};

const optionsType = {
    1:'NV/CA',
    2:'NV/CB'
}

const optionsVoucher = {
    235655:'00235655',
    235656:'00235656'
}

class Landing extends Component {

    handleOnSelect = (row, isSelect) => {
        //console.log(row, isSelect);
    }

    handleOnSelectAll = (isSelect, rows) => {
        //console.log(rows, isSelect, 'todos');
    }

    render() {
        const { theme, t } = this.props

        const columns = [
            {
                dataField: 'date',
                text: t('global.date'),     
                align:'center',
                headerAlign:'center',                  
                filter: dateFilter({
                    delay: 400,
                    placeholder: 'custom placeholder',
                    withoutEmptyComparatorOption: true,
                    comparators: [Comparator.EQ, Comparator.GT, Comparator.LT],
                    style: { display: 'inline-grid' },
                    className: '',
                    //comparatorStyle: {},
                    comparatorClassName:`${theme.inputFilter} mt-2`,
                    //dateStyle: { margin: '0px', width:'100%' },
                    dateClassName: theme.inputFilter
                  })           
            }, {
                dataField: 'client',
                text: t('global.client'),
                align:'center',
                headerAlign:'center',
                formatter: ( cell => selectOptions[cell]),
                filter: selectFilter({
                    options: selectOptions,    
                    className: `${theme.inputFilter} mt-2`,     
                    placeholder:t('global.client')           
                }),               

            }, {
                dataField: 'type',
                text: t('global.type'),
                align:'center',
                headerAlign:'center',
                formatter: ( cell => optionsType[cell]),
                filter: selectFilter({
                    options: optionsType,    
                    className: `${theme.inputFilter} mt-2`,     
                    placeholder:t('global.type')           
                }),  
            }, {
                dataField: 'voucher',
                text: t('landing.form.voucher'),
                align:'center',
                headerAlign:'center',
                formatter: ( cell => optionsVoucher[cell]),
                filter: selectFilter({
                    options: optionsVoucher,    
                    className: `${theme.inputFilter} mt-2`,     
                    placeholder:t('landing.form.voucher')           
                }),                
            },{
                dataField: 'detail',
                text: t('global.detail'),
                headerAlign:'center',
                align:'left',
            },{
                dataField: 'branch',
                text: t('landing.form.branch'),
                align:'center',
                headerAlign:'center', 
            },{
                dataField: 'total',
                text: t('global.total'),
                align:'center',
                headerAlign:'center',
            },{
                dataField: 'actions',
                text: '',
                align:'center',
                headerAlign:'center',
                formatter:((cell, row, rowIndex) => {
                    //console.log(cell, row, rowIndex);
                    return(
                        <FontAwesomeIcon icon={faEye} />
                    )
                }),
                
            }
        ];

        
        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            onSelect: this.handleOnSelect, 
            onSelectAll:this.handleOnSelectAll,            
            //selectionHeaderRenderer: ({ mode, checked, indeterminate }) => ( <div>Prueba</div> ),
            //selectionRenderer: ({ mode, checked, disabled }) => (<div>columns</div>)
        };
        
        
        return (
            <Row>
                <Col sm={12} className={`${theme.Title} mt-4`} >
                    {t("landing.title")}
                </Col>
                <Col className={"m-4"}>
                    <CommonTable 
                        columns={columns}
                        data={voucher}
                        selectRow={selectRow}
                        rowClasses={ theme.tableRow }
                        headerClasses={ theme.tableHeader }
                    />
                </Col>
                <Col sm={12} className={"text-right pr-3"}>
                    <InputButton
                        valueButton={t('global.start')}
                        urlForm={"/landing"}
                    />
                </Col>
                <Col sm={12}>
                    <div className="dropdown-divider col-12 p-2" />
                </Col>
                <Col sm={12} className={"mb-5"}>
                    <div className={theme.Title}>
                        Comprobantes
                    </div>
                </Col>
                <Col sm={12}>
                    <div className="dropdown-divider col-12 p-2" />
                </Col>
                <Col sm={12}>
                    <div className={theme.Title}>
                        Filtros Guardados
                    </div>
                    <div className={"mt-4"}>
                        Factura de la última semana
                    </div>
                </Col>
            </Row>
        )
    }
}
export default (withTranslation()(withMenu( Landing )));