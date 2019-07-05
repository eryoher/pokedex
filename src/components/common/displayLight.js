import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import styles from './displayLight.module.css';

const mapper = {
    'A': 'yellow',
    'V': 'green',
    'R': 'red',
} 

class DisplayLight extends Component {
    render() {
        const { semaforo, theme } = this.props;        
        const divClass =  ((semaforo && semaforo in mapper) ? theme[mapper[semaforo]] : theme["grey"]);        
        return (
            <div className={`${theme.semaforo} ${divClass}`} />
        )
    }
}
  

export default themr('DisplayLightStyles', styles)(DisplayLight); 