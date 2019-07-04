import CurrencyFormat from 'react-currency-format';
import React, { Component } from 'react'

const mapper = {
  'ARS': {
    prefix: '$',
    decimalSeparator: ',',
    thousandSeparator: '.',
  },
  'USD': {
    prefix: 'U$D',
    decimalSeparator: '.',
    thousandSeparator: ',',
  },
}

export default class displayAmount extends Component {
    
    render() {
        const { amount, currency } = this.props;
        let tmpamount = (amount) ? amount : 0;
        let config = mapper['ARS']

        if (currency) {
            config = mapper[currency]
        }
        return (
            <CurrencyFormat
                value={tmpamount}
                displayType={'text'}
                decimalScale={2}
                fixedDecimalScale={true}
                decimalSeparator={config.decimalSeparator}
                thousandSeparator={config.thousandSeparator}
                prefix={config.prefix}
            />
        )
    }
}