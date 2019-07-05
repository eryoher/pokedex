import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faPercent  } from '@fortawesome/free-solid-svg-icons';
import CommonTable from 'components/common/commonTable';
import CollapseBotton from 'components/common/collapseBoton';
import InputText from 'components/form/inputText';
import DisplayLight from 'components/common/displayLight';
import DisplayAmount from 'components/common/displayAmount';
import { themr } from 'react-css-themr';
import styles from './itemsTable.module.css';

const voucher = [
    {
        id:1,
        code:'KLN000003',
        description:'KLONAL AMOX-G 500 MG X 90 ML 51%',
        unit:'UN',
        quantity:'100',
        status:'R',
        cufOrigin:'20032',
        unitPrice:'38.79',
        netAmount:'3879',
        deliveryDate:'07/02/2019',
        client:14297,
        deal:' Por la compra de 5 lleva la 6 gratis. ',
    },
    {
        id:2,    
        code:'KLN000007',
        description:'KLONAL DIPIRONA K JARABE 5GR 100 ML 55%',
        unit:'UN',
        quantity:'0',
        status:'V',
        cufOrigin:'20020',
        unitPrice:'37.42',
        netAmount:'0',
        deliveryDate:'06/22/2019',
        deal:'',
    }
]

class LoadItemsTable extends Component {
    

    render() {
        const { theme, t } = this.props

        const columns = [
            {
                dataField: 'code',
                text: t('global.code'),     
                align:'center',
                headerAlign:'center',    
                headerStyle:{width:'10%'},                    
            }, {
                dataField: 'description',
                text: t('global.description'),
                align:'left',
                headerAlign:'center',         
                headerStyle:{width:'20%'},                   
            }, {
                dataField: 'unit',
                text: t('global.unit'),
                align:'center',
                headerAlign:'center',                
                headerStyle:{width:'5%'},                  
            }, {
                dataField: 'quantity',
                text: t('global.quantity'),
                align:'center',
                headerAlign:'center',
                headerStyle:{width:'7%'},                  
                formatter:((cell, row, rowIndex) => {                    
                    return(
                        <InputText 
                            value={cell}
                            type={'number'}
                            styles={{padding:'0.375rem'}}
                        />
                    )
                }),            
            },{
                dataField: 'status',
                text: '',
                headerAlign:'center',
                align:'center',
                headerStyle:{width:'2%'}, 
                formatter:((cell, row, rowIndex) => {                    
                    return(
                        <DisplayLight semaforo={cell} />
                    )
                }), 
            },{
                dataField: 'cufOrigin',
                text: t('loadItem.table.cufOrigin'),
                align:'center',
                headerAlign:'center', 
                headerStyle:{width:'10%'},                  
            },{
                dataField: 'unitPrice',
                text: t('loadItem.table.unitPrice'),
                align:'right',
                headerAlign:'center',
                headerStyle:{width:'10%'},                  
                formatter:((cell, row, rowIndex) => {                    
                    return(
                        <DisplayAmount amount={cell} />
                    )
                }), 
            },{
                dataField: 'netAmount',
                text: t('loadItem.table.netAmount'),
                align:'right',
                headerAlign:'center',
                headerStyle:{width:'10%'},                  
                formatter:((cell, row, rowIndex) => {                    
                    return(
                        <DisplayAmount amount={cell} />
                    )
                }), 
            },{
                dataField: 'deliveryDate',
                text: t('loadItem.table.deliveryDate'),
                align:'center',
                headerAlign:'center',
                headerStyle:{width:'10%'},                  
            },{
                dataField: 'deal',
                text: t('global.deal'),
                align:'center',
                headerAlign:'center',
                headerStyle:{width:'5%'},                  
                title:true,
                formatter:((cell, row, rowIndex) => {
                    const result = ( cell ) ? <FontAwesomeIcon icon={faPercent} /> : null;
                    return(
                        result
                    )
                }),
            },{
                dataField: 'actions',
                text: '',
                align:'center',
                headerAlign:'center',
                headerStyle:{width:'5%'},
                formatter:((cell, row, rowIndex) => {                    
                    return(
                        <FontAwesomeIcon icon={faShoppingCart} />                        
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
               
                return <CollapseBotton status={isAnyExpands} />
            },
            expandColumnRenderer: ({ expanded, rowKey }) => {
                if(!(rowKey in noExpand) ){
                    return <CollapseBotton status={expanded} />
                }               
            },            
        };

      
        return (
            <Row>
                <Col className={"m-4"}>
                    <CommonTable
                        columns={columns}
                        data={voucher}
                        rowClasses={ theme.tableRow }
                        headerClasses={ theme.tableHeader }
                        expandRow={expandRow}
                    />
                </Col>
            </Row>
        )
    }
}

export default themr('LoadItemsTableStyles', styles)(withTranslation()( LoadItemsTable ));