import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';

class Steps extends Component {

    renderSteps = () => {
        const {steps} = this.props;
        

        const rows = steps.map((step, index) => {
            const clasBadge = ( step.main ) ? 'badge-primary' : 'badge-secondary';
            return (
                <Col className={'col-sm'} key={index}>
                    <span className={`badge badge-pill ${clasBadge} `} >{index + 1}</span> {step.label}
                </Col>
            );
        });

        return rows;
    }

    render() {
        const {steps} = this.props;
        
        return (
            <Row className="mt-3 mb-3 col-12"  style={{fontFamily:'Arial', fontSize:'14px'}} >
                {steps && this.renderSteps()}
            </Row>
        );
    }
}

export default Steps;