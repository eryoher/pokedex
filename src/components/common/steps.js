import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';

class Steps extends Component {

    renderSteps = () => {
        const {steps} = this.props;
        

        const rows = steps.map((step, index) => {
            return (
                <Col className={'col-sm'} key={index}>
                    <span className="badge badge-primary badge-pill">{index + 1}</span> {step.label}
                </Col>
            );
        });

        return rows;
    }

    render() {
        const {steps} = this.props;
        
        return (
            <Row >
                {steps && this.renderSteps()}
            </Row>
        );
    }
}

export default Steps;