import React, { Component } from 'react'
import { Grid } from 'react-bootstrap';
import withMenu from '../../components/common/withMenu'
import Steps from '../../components/common/steps';

class Voucher extends Component {
    render() {
        const steps = [
            {
                label:'Seleccion del cliente',
                main:true
            },
            {
                label:'Carga de Cabecera',
            },
            {
                label:'Carga de Items',
            },
            {
                label:'Afectacion Comprobantes',
            },
            {
                label:'Generar',
            },            
            
        ]
        return (
            <div className="container" >
                <Steps steps={steps} />
                Prueba nuevo form. editando... 
            </div>
        )
    }
}

export default withMenu( Voucher );