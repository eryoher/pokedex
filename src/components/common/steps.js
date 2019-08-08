import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { themr } from 'react-css-themr';
import commonTheme from './steps.module.css';
import InputButton from 'components/form/inputButton';


class Steps extends Component {

    renderSteps = () => {
        const { steps, theme, nextButton, backButton } = this.props;
        let rows = [];

        if (backButton) {
            rows.push(
                <Col className={'col-1'} key={101}>
                    <InputButton
                        backButton
                        urlForm={backButton.url}
                    />
                </Col>
            )
        }

        const tmps = steps.map((step, index) => {
            const clasBadge = (step.main || step.before) ? 'badge-primary' : 'badge-secondary';
            const badgeNumber = (step.before) ? <FontAwesomeIcon icon={faCheck} /> : index + 1;
            const divider = (index + 1 === steps.length) ? null : (<span style={{ borderColor: '#2F80ED', marginTop: '18px' }} className={"dropdown-divider col"} />)
            return (
                <>
                    <Col className={'col-sm pt-2 text-center'} key={index + 1}>
                        <span className={`badge ${clasBadge} ${theme.step} `} >{badgeNumber}</span> <span className={theme.title} > {step.label} </span>
                    </Col>
                    {divider}
                </>
            );
        });

        const result = rows.concat(tmps);

        if (nextButton) {
            result.push(
                <Col className={'col-1'} key={result.length * 5} >
                    <InputButton
                        nextButton
                        urlForm={nextButton.url}
                    />
                </Col>
            )
        }

        return result;
    }

    render() {
        const { steps, theme } = this.props;
        return (
            <Row className={`${theme.containerBody} mt-3 mb-3 col-12`} >
                {steps && this.renderSteps()}
            </Row>
        );
    }
}



export default themr('CommonTheme', commonTheme)(Steps);