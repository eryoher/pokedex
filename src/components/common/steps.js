import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck  } from '@fortawesome/free-solid-svg-icons';
import { themr } from 'react-css-themr';
import commonTheme from './steps.module.css';


class Steps extends Component {

    renderSteps = () => {
        const {steps, theme, nextButton, backButton} = this.props;                
        let rows = [];

        if(backButton){            
            rows.push(
                <Col className={'col-1'}>
                    <div className={` btn btn-primary ${theme.formButton} `} >
                        <a style={{color:'#fff', textDecoration:'none'}} href={backButton.url}> { backButton.label } </a>
                    </div>
                </Col>
            )
        }
        
        const tmps = steps.map((step, index) => {
            const clasBadge = ( step.main || step.before ) ? 'badge-primary' : 'badge-secondary';
            const badgeNumber = (step.before) ? <FontAwesomeIcon icon={faCheck} /> : index + 1;
            return (
                <Col className={'col-sm'} key={index}>
                    <span className={`badge ${clasBadge} ${theme.step} `} >{badgeNumber}</span> <span className={theme.title} > {step.label} </span>
                </Col>
            );
        });

        const result = rows.concat(tmps);

        if(nextButton){            
            result.push(
                <Col className={'col-1'}>
                    <div className={` btn btn-primary ${theme.formButton} `} >
                        <a style={{color:'#fff', textDecoration:'none'}} href={nextButton.url}> { nextButton.label } </a>
                    </div>
                </Col>
            )
        }

        return result;
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