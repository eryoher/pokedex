import React, { Component } from 'react';
import InputText from './inputText';

import InputDropdown from './inputDropdown';


export default class GenericInputForm extends Component {
    render() {
        const { config } = this.props;
        const inputConfig = [{ idcampo: config.cod_atrib.trim(), label: config.descripcion, visible: 1, requerido: 0, editable: 1 }]
        const properties = {
            inputFormCol: { sm: 11 },
            fields: inputConfig,
            inputId: config.cod_atrib,
            name: config.cod_atrib,
            placeholder: config.descripcion,
            label: config.descripcion,
            colLabel: "col-sm-2",
            colInput: "col-sm-10",
            divStyle: { paddingLeft: '17px' }
        }

        if (config.valores.length) {

            const optionsConditions = config.valores.map((opt) => {
                return ({ id: opt.cod_valor, label: opt.desc_valor })
            });

            return (
                <InputDropdown
                    options={optionsConditions}
                    onChange={() => { }}
                    {...properties}
                />
            )
        } else {
            return (
                <InputText
                    {...properties}
                />
            )
        }

    }
}
