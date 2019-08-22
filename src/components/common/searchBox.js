import React, { Component, Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import InputAutocomplete from 'components/form/inputAutocomplete';
import { withTranslation } from 'react-i18next';
import { getProducts } from '../../actions';
import { connect } from 'react-redux';


class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    handleSearch = (value) => {
        this.props.getProducts({ desc_prod: value })
    }

    handleSelect = (selected) => {
        console.log(selected, 'cuando seleccion')
    }

    render() {
        const { productOptions, t } = this.props;
        const auoptions = [];
        return (
            <Fragment>
                <InputAutocomplete
                    inputFormCol={{ sm: 6 }}
                    label={false}
                    inputId={'clienteId'}
                    name={'clienteId'}
                    placeholder={t('searchBox.form.insert_product')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    handleSearch={this.handleSearch}
                    auoptions={auoptions}
                    handleLoading={this.state.loading}
                    handleSelect={this.handleSelect}
                    labelKey={"label"}
                    disable={false}
                />
                <InputAutocomplete
                    inputFormCol={{ sm: 3 }}
                    label={false}
                    inputId={'clienteId'}
                    name={'clienteId'}
                    placeholder={t('searchBox.form.insert_code')}
                    styles={{ width: '100%' }}
                    colLabel={"col-sm-2"}
                    colInput={"col-sm-10"}
                    handleSearch={this.handleSearch}
                    auoptions={auoptions}
                    handleLoading={this.state.loading}
                    handleSelect={this.handleSelect}
                    labelKey={"label"}
                    disable={false}
                />
                <Col sm={1}>
                    <input type="checkbox" className={"form-check-input"} value="1" /> <label className={"form-check-label pt-1"}>Con Stock</label>
                </Col>
                <Col sm={1} className={"text-left"}>
                    <FontAwesomeIcon icon={faSearch} />
                </Col>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ products }) => {
    return { products }
}



export default connect(mapStateToProps, { getProducts })(withTranslation()(SearchBox));   