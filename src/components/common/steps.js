import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck  } from '@fortawesome/free-solid-svg-icons';
import { themr } from 'react-css-themr';
import commonTheme from './steps.module.css';


class Steps extends Component {

    renderSteps = () => {
        const {steps, theme} = this.props;                
        const rows = steps.map((step, index) => {
            const clasBadge = ( step.main || step.before ) ? 'badge-primary' : 'badge-secondary';
            const badgeNumber = (step.before) ? <FontAwesomeIcon icon={faCheck} /> : index + 1;
            return (
                <Col className={'col-sm'} key={index}>
                    <span className={`badge ${clasBadge} ${theme.step} `} >{badgeNumber}</span> <span className={theme.title} > {step.label} </span>
                </Col>
            );
        });

        return rows;
    }

    render() {
        const {steps, theme} = this.props;        
        return (
            <Row className={`${theme.containerBody} mt-3 mb-3 col-12`} >
                {steps && this.renderSteps()}
            </Row>
        );
    }
}



export default themr('CommonTheme', commonTheme)(Steps);