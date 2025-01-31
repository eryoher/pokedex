import React, { Component } from 'react';
import { searchPokemons } from '../../actions';
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
        this.props.searchPokemons({ pokemon: searchValue.toLowerCase() });
    }

    handleClear = () => {
        this.setState({ searchValue: '' })
    }

    render() {
        return (
            <Row>
                <Formik
                    onSubmit={(values, actions) => {
                        this.handleSearch();
                    }}
                    enableReinitialize={true}
                    render={({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className="col-12">
                            <Col sm={12}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        name={"imagen"}
                                        id={"imagen"}
                                        placeholder={"Buscar un Pokemon"}
                                        aria-label="Buscar un Pokemon"
                                        value={this.state.searchValue}
                                        onChange={(e) => {
                                            this.setState({ searchValue: e.target.value })
                                        }}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="info" onClick={this.handleClear} type={'button'}> Borrar </Button>
                                        <Button variant="primary" type={'submit'}> Buscar </Button>
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

const mapStateToProps = () => {
    return {}
}



export default connect(mapStateToProps, { searchPokemons })(SearchBox);   