import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye  } from '@fortawesome/free-solid-svg-icons';
import CommonTable from 'components/common/commonTable';
import CollapseBotton from 'components/common/collapseBoton';


const voucher = [
    {
        id:1,
        date:'07/02/2019',
        client:14297,
        type:1,
        voucher:235655,
        detail:'Notas de venta sin Aprobacion',
        branch:'0',
        total:'16649.50'
    },
    {
        id:2,        
        date:'06/22/2019',
        client:14922,
        type:2,
        voucher:235656,
        detail:'Notas de venta sin Aprobacion',
        branch:'0',
        total:'98569.50'

    }
]

class LoadItemsTable extends Component {

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
            }, {
                dataField: 'client',
                text: t('global.client'),
                align:'center',
                headerAlign:'center',                
            }, {
                dataField: 'type',
                text: t('global.type'),
                align:'center',
                headerAlign:'center',                
            }, {
                dataField: 'voucher',
                text: t('landing.form.voucher'),
                align:'center',
                headerAlign:'center',                
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
                text: 'Acciones',
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

        const noExpand = [1, 3];

        const expandRow = {
            renderer: row => (
              <div>
                <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
              </div>
            ),
            showExpandColumn: true,
            nonExpandable: noExpand,
            expandHeaderColumnRenderer: ({ isAnyExpands }) => {
               
                return <CollapseBotton status={isAnyExpands} onPress = { () => {} } />
            },
            expandColumnRenderer: ({ expanded, rowKey }) => {
                if(!(rowKey in noExpand) ){
                    return <CollapseBotton status={expanded} onPress = { () => {} } />
                }               
            },            
        };

      
        return (
            <Row>
                <Col className={"m-4"}>
                    <CommonTable
                        columns={columns}
                        data={voucher}
                        //rowClasses={ theme.tableRow }
                        //headerClasses={ theme.tableHeader }
                        expandRow={expandRow}
                    />
                </Col>
            </Row>
        )
    }
}

export default withTranslation()(LoadItemsTable) ;
