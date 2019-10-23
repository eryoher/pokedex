import React, { Component } from 'react';
import { searchImage } from '../../actions';
import { connect } from 'react-redux';
import { Col, Row, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Formik } from 'formik';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
    }

    handleSearch = () => {
        const { searchValue } = this.state;
        const { listSellers } = this.props;
        const count = (listSellers.length > 0) ? listSellers.length : 1;
        this.props.searchImage({ image: searchValue, count });
    }

    handleClear = () => {
        this.setState({ searchValue: '' })
    }

    render() {
        const { listSellers } = this.props;
        let disableSearch = false;
        listSellers.forEach(seller => {
            if (seller.score > 20) {
                disableSearch = true;
            }
        });
        return (
            <Row>
                <Formik
                    onSubmit={(values, actions) => {
                        this.handleSearch();
                    }}
                    enableReinitialize={true}
                    render={({ values, handleBlur, handleChange, errors, touched, isSubmitting, handleSubmit, setFieldValue, setFieldTouched }) => (
                        <Form onSubmit={handleSubmit} className="col-12">
                            <Col sm={12}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        name={"imagen"}
                                        id={"imagen"}
                                        placeholder={(disableSearch) ? "La carrera termino." : "Buscar Imagen"}
                                        aria-label="Buscar Imagen"
                                        value={this.state.searchValue}
                                        onChange={(e) => {
                                            this.setState({ searchValue: e.target.value })
                                        }}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="info" onClick={this.handleClear} type={'button'}> Borrar </Button>
                                        <Button variant="primary" disabled={disableSearch} type={'submit'}> Buscar </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Form>
                    )}
                />
            </Row>

        )
    }
}

const mapStateToProps = ({ sellerRedux }) => {
    const { listSellers } = sellerRedux;
    return { listSellers }
}



export default connect(mapStateToProps, { searchImage })(SearchBox);   