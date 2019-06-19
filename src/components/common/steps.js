import React, { Component } from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck  } from '@fortawesome/free-solid-svg-icons'
class Steps extends Component {

    renderSteps = () => {
        const {steps} = this.props;        

        const rows = steps.map((step, index) => {
            const clasBadge = ( step.main || step.before ) ? 'badge-primary' : 'badge-secondary';
            const badgeNumber = (step.before) ? <FontAwesomeIcon icon={faCheck} /> : index + 1;
            return (
                <Col className={'col-sm'} key={index}>
                    <span style={{
                        borderRadius: '100%',
                        height:'20px',
                        width: '20px',
                        paddingTop: '0.5em'
                    }}  className={`badge ${clasBadge} `} >{badgeNumber}</span> {step.label}
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