import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default class CollapseBotton extends Component {
    render() {
        const {status, onPress} = this.props;
        const icon = ( status ) ? faMinusCircle : faPlusCircle;
        return (
            <FontAwesomeIcon icon={icon} onClick={ () => onPress() } />
        )
    }
}
