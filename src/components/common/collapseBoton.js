import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default class CollapseBotton extends Component {

    handlePress = () => {
        const { onPress } = this.props;

        if(onPress){
            onPress();
        }
    }


    render() {
        const {status, onPress} = this.props;
        const icon = ( status ) ? faMinusCircle : faPlusCircle;
        return (
            <FontAwesomeIcon icon={icon} onClick={ this.handlePress } />
        )
    }
}
